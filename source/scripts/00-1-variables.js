const layers = {
  'start': searchEl('.select-level'),
  'easy': searchEl('.play-ground_easy'),
  'normal': searchEl('.play-ground_normal'),
  'hard': searchEl('.play-ground_hard'),
}
const workSpace = searchEl('.layer-wrapper');
let hardSelectForm = searchEl('.select-level__choise-of-difficulty');
const playGameButton = searchEl('.select-level__start-button');
const classFlip = 'play-ground__flip-card-wrapper_flipped';
