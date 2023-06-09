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
  content: `I often make decision xxx. Then, of course, I am sorry I made them.`,
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
  content: `Base jumping, the sport of jumping from a high building, antenna tower, bridge, etc., is xxx`,
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
  content: `13. Lincoln tunnel has xxx Holland tunnel.`,
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
  content: ``,
  id: 13,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_15 = {
  content: ``,
  id: 14,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_16 = {
  content: ``,
  id: 15,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_17 = {
  content: ``,
  id: 16,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_18 = {
  content: ``,
  id: 17,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_19 = {
  content: ``,
  id: 18,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_20 = {
  content: ``,
  id: 19,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_21 = {
  content: ``,
  id: 20,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_22 = {
  content: ``,
  id: 21,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_23 = {
  content: ``,
  id: 22,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};

const q_24 = {
  content: ``,
  id: 23,
  answers: [
    {
      index: 0,
      content: ``,
      isCorrect: false
    },
    {
      index: 1,
      content: ``,
      isCorrect: false
    },
    {
      index: 2,
      content: ``,
      isCorrect: false
    },
    {
      index: 3,
      content: ``,
      isCorrect: false
    }
  ]
};


export const Q_PART_1: DetailQuestionInterface[] = [q_1, q_2, q_3, q_4, q_5, q_6, q_7, q_8, q_9, q_10, q_11, q_12, q_13, q_14, q_15, q_16, q_17, q_18, q_19, q_20, q_21, q_22, q_23, q_24]

// END PART 1