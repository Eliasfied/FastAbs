import defaultWorkoutStorage from "./defaultWorkoutStorage";
let data;
export async function getWorkout(workout) {
  await defaultWorkoutStorage.getItem(workout).then((result) => {
    data = result;
  });

  return data;
}
