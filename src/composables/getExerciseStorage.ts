import ExerciseStorage from "../storage/ExerciseStorage";
let data;

export async function getExercise(exercise) {
  await ExerciseStorage.getItem(exercise).then((result) => {
    data = result;
  });

  return data;
}
