export type Spell = {
  id: SpellId;
  url: string;
  name: string;
  icon: string;
  level: number;
  upcast: boolean;
  action: string;
  duration: string;
  range: string;
  type: string;
  damage: {
    dice: string;
    damageType: string;
  }[];
};

export type SpellId =
  | "acid-splash"
  | "blade-ward"
  | "bone-chill"
  | "booming-blade"
  | "bursting-sinew"
  | "dancing-lights"
  | "eldritch-blast"
  | "fire-bolt"
  | "friends"
  | "guidance"
  | "light"
  | "mage-hand"
  | "minor-illusion"
  | "poison-spray"
  | "produce-flame"
  | "ray-of-frost"
  | "resistance-cantrip"
  | "sacred-flame"
  | "shillelagh"
  | "shocking-grasp"
  | "thaumaturgy"
  | "thorn-whip"
  | "toll-the-dead"
  | "true-strike"
  | "vicious-mockery"
  | "animal-friendship"
  | "armour-of-agathys"
  | "arms-of-hadar"
  | "bane-spell"
  | "bless"
  | "burning-hands"
  | "charm-person"
  | "chromatic-orb"
  | "colour-spray"
  | "command"
  | "compelled-duel"
  | "create-or-destroy-water"
  | "cure-wounds"
  | "disguise-self"
  | "dissonant-whispers"
  | "divine-favour"
  | "enhance-leap"
  | "ensnaring-strike"
  | "entangle"
  | "expeditious-retreat"
  | "faerie-fire"
  | "false-life"
  | "feather-fall"
  | "find-familiar"
  | "fog-cloud"
  | "goodberry"
  | "grease"
  | "guiding-bolt"
  | "hail-of-thorns"
  | "healing-word"
  | "hellish-rebuke"
  | "heroism"
  | "hex"
  | "hunter-s-mark"
  | "ice-knife"
  | "inflict-wounds"
  | "longstrider"
  | "magic-missile"
  | "shield"
  | "sleep"
  | "sleet-storm"
  | "slow"
  | "speak-with-animals"
  | "spike-growth"
  | "spiritual-weapon"
  | "stinking-cloud"
  | "suggestion"
  | "web"
  | "blight"
  | "cloudkill"
  | "cone-of-cold"
  | "contagion"
  | "create-food-and-water"
  | "darkness"
  | "death-knight-s-curse"
  | "delayed-blast-fireball"
  | "destructive-wave"
  | "dimension-door"
  | "disintegrate"
  | "dominate-person"
  | "dream"
  | "earthquake"
  | "eyebite"
  | "fireball"
  | "flame-strike"
  | "forbiddance"
  | "gate"
  | "greater-invisibility"
  | "harm"
  | "heal"
  | "heroism"
  | "hold-monster"
  | "hold-person"
  | "imprisonment"
  | "incendiary-cloud"
  | "inflict-wounds"
  | "insect-plague"
  | "irresistible-dance"
  | "lightning-bolt"
  | "magic-circle"
  | "mass-heal"
  | "maze"
  | "meteor-swarm"
  | "mind-spike"
  | "modify-memory"
  | "phantasmal-killer"
  | "planar-binding"
  | "power-word-blind"
  | "power-word-stun"
  | "prismatic-spray"
  | "raise-dead"
  | "regenerate"
  | "resurrection"
  | "sanctuary"
  | "scorching-ray"
  | "seeming"
  | "shadow-of-mordred"
  | "shield-of-faith"
  | "shout"
  | "sleet-storm"
  | "slow"
  | "speak-with-dead"
  | "spike-growth"
  | "spiritual-weapon"
  | "stinking-cloud"
  | "suggestion"
  | "symbol"
  | "telekinesis"
  | "teleportation-circle"
  | "time-stop"
  | "true-seeing"
  | "unseen-servant"
  | "vampiric-touch"
  | "wall-of-fire"
  | "wall-of-thorns"
  | "wind-wall"
  | "witch-bolt"
  | "word-of-recall"
  | "zone-of-truth";
