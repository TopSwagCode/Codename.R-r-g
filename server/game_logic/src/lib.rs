use commands::GameCommand;
use components::{Destination, Position, UnitId};
use game_state::{GameStateCache, UidEntityMap, Unit};
use legion::systems::CommandBuffer;
use legion::*;
use legion::{Resources, Schedule, World};
use resources::TimeResource;
use schedule::create_schedule;

pub mod commands;
pub mod components;
pub mod game_state;
pub mod resources;
pub mod schedule;
pub mod systems;

pub struct GameLogic {
    pub world: World,
    pub schedule: Schedule,
    pub resources: Resources,
}

impl Default for GameLogic {
    fn default() -> Self {
        GameLogic::new()
    }
}

impl GameLogic {
    pub fn new() -> Self {
        let world = World::default();
        let schedule = create_schedule();

        let mut resources = Resources::default();
        resources.insert(TimeResource::default());
        resources.insert(UidEntityMap::default());

        Self {
            world,
            schedule,
            resources,
        }
    }

    pub fn execute(&mut self) {
        self.schedule.execute(&mut self.world, &mut self.resources);
        let mut time = self
            .resources
            .get_mut::<TimeResource>()
            .expect("Must have a time resource");
        time.ticks += 1;
    }

    pub fn generate_game_state_cache(&self) -> GameStateCache {
        let mut new_game_state_cache = GameStateCache::default();
        <(&Position, Option<&Destination>, &UnitId)>::query().for_each(
            &self.world,
            |(pos, des_op, id)| {
                let des = des_op.map(|s| (s.x, s.y)).unwrap_or((pos.x, pos.y));
                new_game_state_cache.units.insert(
                    id.id.clone(),
                    Unit {
                        destination: des,
                        position: (pos.x, pos.y),
                        id: id.id.clone(),
                    },
                );
            },
        );
        new_game_state_cache
    }

    pub fn set_elapsed_seconds(&mut self, elapsed_seconds: f64) {
        let mut time = self
            .resources
            .get_mut::<TimeResource>()
            .expect("Must have a time resource");
        time.elapsed_seconds = elapsed_seconds;
    }

    pub fn handle_commands(&mut self, commands: Vec<GameCommand>) {
        let mut command_buffer = CommandBuffer::new(&self.world);
        for command in commands {
            if matches!(command, GameCommand::ResetGameCommand) {
                self.world = World::default();
            } else {
                // The extra 1 here, is to get around bug that you need 2 components when pushing to buffer
                command_buffer.push((command, 1));
            }
        }
        command_buffer.flush(&mut self.world, &mut self.resources);

    }
}
