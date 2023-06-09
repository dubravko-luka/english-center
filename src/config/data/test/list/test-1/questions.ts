import { space_line } from "@/helpers/common"
import { DetailQuestionInterface } from "@/types/interfaces"

// PART 1
const q_1 = {
  content: `We are having a ${space_line} this afternoon so that we can talk to our customers, who are in different cities, at the same time.`,
  id: 0,
  answers: [
    {
      index: 0,
      content: `blind date`,
      isCorrect: false
    },
    {
      index: 1,
      content: `business meeting`,
      isCorrect: false
    },
    {
      index: 2,
      content: `job interview`,
      isCorrect: false
    },
    {
      index: 3,
      content: `conference call`,
      isCorrect: true
    }
  ]
}

const q_2 = {
  content: `The Panama ${space_line} is a human-made waterway between North and South America which creates an easier route for ships.`,
  id: 1,
  answers: [
    {
      index: 0,
      content: `Rain forest`,
      isCorrect: false
    },
    {
      index: 1,
      content: `Water fall`,
      isCorrect: false
    },
    {
      index: 2,
      content: `Canal`,
      isCorrect: true
    },
    {
      index: 3,
      content: `Lake`,
      isCorrect: false
    }
  ]
}

const q_3 = {
  content: `Ha Long Bay, in the northeast of Vietnam, includes over 1,600 ${space_line}, forming a spectacular view of the sea.`,
  id: 2,
  answers: [
    {
      index: 0,
      content: `valleys`,
      isCorrect: false
    },
    {
      index: 1,
      content: `islands`,
      isCorrect: true
    },
    {
      index: 2,
      content: `canals`,
      isCorrect: false
    },
    {
      index: 3,
      content: `waterfalls`,
      isCorrect: false
    }
  ]
}

const q_4 = {
  content: `I am so ${space_line} to see what is inside the present you have just had. Please open it right now!`,
  id: 3,
  answers: [
    {
      index: 0,
      content: `curious`,
      isCorrect: true
    },
    {
      index: 1,
      content: `stubborn`,
      isCorrect: false
    },
    {
      index: 2,
      content: `adventurous`,
      isCorrect: false
    },
    {
      index: 3,
      content: `ambitious`,
      isCorrect: false
    }
  ]
}

const q_5 = {
  content: `There's a great music concert he wants to see on Sunday. It ${space_line} at 7:30 p.m., so he's having dinner first.`,
  id: 4,
  answers: [
    {
      index: 0,
      content: `starts`,
      isCorrect: true
    },
    {
      index: 1,
      content: `started`,
      isCorrect: false
    },
    {
      index: 2,
      content: `is starting`,
      isCorrect: false
    },
    {
      index: 3,
      content: `will be starting`,
      isCorrect: false
    }
  ]
}

const q_6 = {
  content: `${space_line} uses the sun's light and heat to generate renewable or 'green' power.`,
  id: 5,
  answers: [
    {
      index: 0,
      content: `Nuclear energy`,
      isCorrect: false
    },
    {
      index: 1,
      content: `Solar energy`,
      isCorrect: true
    },
    {
      index: 2,
      content: `Wind energy`,
      isCorrect: false
    },
    {
      index: 3,
      content: `Light energy`,
      isCorrect: false
    }
  ]
}

const q_7 = {
  content: `I'd been waiting for twenty minutes and I was getting ${space_line} and annoved.`,
  id: 6,
  answers: [
    {
      index: 0,
      content: `indecisive`,
      isCorrect: false
    },
    {
      index: 1,
      content: `inconsiderate`,
      isCorrect: false
    },
    {
      index: 2,
      content: `impatient`,
      isCorrect: true
    },
    {
      index: 3,
      content: `immature`,
      isCorrect: false
    }
  ]
}

const q_8 = {
  content: `We will reduce air pollution and may save money if we take a bus or a subway system. Maybe we should start ${space_line}`,
  id: 7,
  answers: [
    {
      index: 0,
      content: `buying organic food`,
      isCorrect: false
    },
    {
      index: 1,
      content: `using rechargeable batteries`,
      isCorrect: false
    },
    {
      index: 2,
      content: `paying bills online`,
      isCorrect: false
    },
    {
      index: 3,
      content: `taking public transportation`,
      isCorrect: false
    }
  ]
}

const q_9 = {
  content: `Stephen has never had a happy day ${space_line} he lost his job.`,
  id: 8,
  answers: [
    {
      index: 0,
      content: `since`,
      isCorrect: false
    },
    {
      index: 1,
      content: `as`,
      isCorrect: false
    },
    {
      index: 2,
      content: `when`,
      isCorrect: false
    },
    {
      index: 3,
      content: `while`,
      isCorrect: false
    }
  ]
}

const q_10 = {
  content: `I ${space_line} to my friend since yesterday, and he won't answer my text messages.`,
  id: 9,
  answers: [
    {
      index: 0,
      content: `don't speak`,
      isCorrect: false
    },
    {
      index: 1,
      content: `won't speak`,
      isCorrect: false
    },
    {
      index: 2,
      content: `didn't speak`,
      isCorrect: false
    },
    {
      index: 3,
      content: `haven't spoken`,
      isCorrect: false
    }
  ]
}

const q_11 = {
  content: `I often make decision ${space_line}. Then, of course, I am sorry I made them.`,
  id: 10,
  answers: [
    {
      index: 0,
      content: `quickly`,
      isCorrect: false
    },
    {
      index: 1,
      content: `quickest`,
      isCorrect: false
    },
    {
      index: 2,
      content: `quicker`,
      isCorrect: false
    },
    {
      index: 3,
      content: `quick`,
      isCorrect: false
    }
  ]
};

const q_12 = {
  content: `Base jumping, the sport of jumping from a high building, antenna tower, bridge, etc., is ${space_line}`,
  id: 11,
  answers: [
    {
      index: 0,
      content: `a dangerously sport`,
      isCorrect: false
    },
    {
      index: 1,
      content: `an extremely sport`,
      isCorrect: false
    },
    {
      index: 2,
      content: `a sport extremely dangerous`,
      isCorrect: false
    },
    {
      index: 3,
      content: `an extremely dangerous sport`,
      isCorrect: false
    }
  ]
};

const q_13 = {
  content: `Lincoln tunnel has ${space_line} Holland tunnel.`,
  id: 12,
  answers: [
    {
      index: 0,
      content: `more traffic lanes as`,
      isCorrect: false
    },
    {
      index: 1,
      content: `more traffic lanes than`,
      isCorrect: false
    },
    {
      index: 2,
      content: `most traffic lanes as`,
      isCorrect: false
    },
    {
      index: 3,
      content: `as traffic lanes as`,
      isCorrect: false
    }
  ]
};

const q_14 = {
  content: `The Rio de Janeiro harbor in Brazil is one of ${space_line} harbors in the world.`,
  id: 13,
  answers: [
    {
      index: 0,
      content: `biggest and most amazing`,
      isCorrect: false
    },
    {
      index: 1,
      content: `the most big and amazing`,
      isCorrect: false
    },
    {
      index: 2,
      content: `bigger and more amazing`,
      isCorrect: false
    },
    {
      index: 3,
      content: `the biggest and most amazing`,
      isCorrect: false
    }
  ]
};

const q_15 = {
  content: `Kate: "Can you give me a ride to class? My motorbike isn't working."\nRuth: "${space_line}"`,
  id: 14,
  answers: [
    {
      index: 0,
      content: `No, I don't have a clue.`,
      isCorrect: false
    },
    {
      index: 1,
      content: `No problem. I'll do it on Sunday.`,
      isCorrect: false
    },
    {
      index: 2,
      content: `Yeah, sure. I'lI be at your house at 7.00.`,
      isCorrect: false
    },
    {
      index: 3,
      content: `Yes. I'll give you the key.`,
      isCorrect: false
    }
  ]
};

const q_16 = {
  content: `Mr. Black: "Would you mind feeding my parrot?"\nMs. White: "${space_line}"`,
  id: 15,
  answers: [
    {
      index: 0,
      content: `No. I don't. I'll feed it after school.`,
      isCorrect: false
    },
    {
      index: 1,
      content: `Yes. I would feel better.`,
      isCorrect: false
    },
    {
      index: 2,
      content: `Sure. I'll look at it after school.`,
      isCorrect: false
    },
    {
      index: 3,
      content: `I guess so. I will look for it.`,
      isCorrect: false
    }
  ]
};

const q_17 = {
  content: `Peter: "Would you mind ${space_line} my plants this weekend? I'm going on a business trip."\nMary: "No, I don't mind. I'll do that for you."`,
  id: 16,
  answers: [
    {
      index: 0,
      content: `water`,
      isCorrect: false
    },
    {
      index: 1,
      content: `watering`,
      isCorrect: false
    },
    {
      index: 2,
      content: `waters`,
      isCorrect: false
    },
    {
      index: 3,
      content: `to water`,
      isCorrect: false
    }
  ]
};

const q_18 = {
  content: `When ${space_line} people live in a small place with a bad living condition, life can become very difficult and unpleasant.`,
  id: 17,
  answers: [
    {
      index: 0,
      content: `few`,
      isCorrect: false
    },
    {
      index: 1,
      content: `little`,
      isCorrect: false
    },
    {
      index: 2,
      content: `too many`,
      isCorrect: false
    },
    {
      index: 3,
      content: `too much`,
      isCorrect: false
    }
  ]
};

const q_19 = {
  content: `Jack: "I think it's good that ${space_line} people are buying hybrid cars."\nJill: "Yeah. It causes ${space_line} pollution"`,
  id: 18,
  answers: [
    {
      index: 0,
      content: `less / more`,
      isCorrect: false
    },
    {
      index: 1,
      content: `less / fewer`,
      isCorrect: false
    },
    {
      index: 2,
      content: `more / less`,
      isCorrect: false
    },
    {
      index: 3,
      content: `more / more`,
      isCorrect: false
    }
  ]
};

const q_20 = {
  content: `If you ${space_line} a leaky faucet, you ${space_line} about 90 litres of water a day.`,
  id: 19,
  answers: [
    {
      index: 0,
      content: `do not fix / will waste`,
      isCorrect: false
    },
    {
      index: 1,
      content: `will not fix / will waste`,
      isCorrect: false
    },
    {
      index: 2,
      content: `do not fix / would waste`,
      isCorrect: false
    },
    {
      index: 3,
      content: `will not fix / waste`,
      isCorrect: false
    }
  ]
};

const q_21 = {
  content: `Barry and I ${space_line} together for an ice-cream on Friday next week. Do you want to join us?`,
  id: 20,
  answers: [
    {
      index: 0,
      content: `are getting`,
      isCorrect: false
    },
    {
      index: 1,
      content: `am getting`,
      isCorrect: false
    },
    {
      index: 2,
      content: `get`,
      isCorrect: false
    },
    {
      index: 3,
      content: `got`,
      isCorrect: false
    }
  ]
};

const q_22 = {
  content: `She has ${space_line} books, enough to read on the journey.`,
  id: 21,
  answers: [
    {
      index: 0,
      content: `a lot`,
      isCorrect: false
    },
    {
      index: 1,
      content: `much`,
      isCorrect: false
    },
    {
      index: 2,
      content: `a few`,
      isCorrect: false
    },
    {
      index: 3,
      content: `a little`,
      isCorrect: false
    }
  ]
};

const q_23 = {
  content: `Stephen: "How much did you sell your old motorbike for?"\nLeroy: "Actually, ${space_line} But I think it's a reasonable price."`,
  id: 22,
  answers: [
    {
      index: 0,
      content: `I'd prefer to not say.`,
      isCorrect: false
    },
    {
      index: 1,
      content: `I'd rather to not say.`,
      isCorrect: false
    },
    {
      index: 2,
      content: `I'd prefer not say.`,
      isCorrect: false
    },
    {
      index: 3,
      content: `I'd rather not say.`,
      isCorrect: false
    }
  ]
};

const q_24 = {
  content: `Tom: "Hello. Can I speak to the manager, please?"\nChristy: "Um, sorry. He's not at his desk right now.${space_line}`,
  id: 23,
  answers: [
    {
      index: 0,
      content: `Would you like a message?`,
      isCorrect: false
    },
    {
      index: 1,
      content: `Would you leave a message?`,
      isCorrect: false
    },
    {
      index: 2,
      content: `Could I leave a message?`,
      isCorrect: false
    },
    {
      index: 3,
      content: `Could you please take a message?`,
      isCorrect: false
    }
  ]
};


export const Q_PART_1: DetailQuestionInterface[] = [q_1, q_2, q_3, q_4, q_5, q_6, q_7, q_8, q_9, q_10, q_11, q_12, q_13, q_14, q_15, q_16, q_17, q_18, q_19, q_20, q_21, q_22, q_23, q_24]

// END PART 1