export default {
	1: {
		batchSize: "5 gallon",
		duration: null,
		instruction: "Bring 6.5 gallons of water to 130 degrees",
		order: 1,
		stopMethod: "user_input",
		stopIndication: "Water hits 130 degrees",
		title: "Boil Water",
		
	},
	2: {
		batchSize: "5 gallon",
		duration: 2000,
		instruction: "At the end of 30 minutes remove the steeping grains.",
		order: 2,
		stopMethod: "timer",
		stopIndication: ["Water Hits 170 degrees - turn off flame.", "30 minute timer expires"],
		title: "Steep grains for 30 min",
		//actualDuration: 1800000
		//testing:
	},
	3: {
		batchSize: "5 gallon",
		duration: null,
		instruction: "With steeping grains no longer in the pot, bring to full boil.  Then kill the flame.",
		order: 3,
		stopMethod: "user_input",
		stopIndication: "Water boils",
		title: "Bring Water to boil, then shut off",
		
	},
	4: {
		batchSize: "5 gallon",
		caution: "Watch for Hot Break! Wort can boil over.",
		duration: null,
		instruction: "After killing the flame, add the malt extract stirring continuously.  Once disolved, turn flame on. Bring to boil",
		order: 4,
		stopMethod: "user_input",
		stopIndication: "Once kettle returns to boil, start 60 minute boil",
		title: "Add Malt Extract",
	},
	5: {
		batchSize: "5 gallon",
		duration: 10000,
		instruction: "Boil for 1 hour.  Drink at least one beer.",
		order: 5,
		stopMethod: "timer",
		stopIndication: "Water hits 130 degrees",
		title: "Boil for 60 minutes",
		//actualDuration: 3600000
		//testing:
		subSteps: {
			//time remaining in boil
			hopsAdditions: [{hops: "first_one", timeRemaining: 4000}, {hops: "second_one", timeRemaining: 2000}, {hops: "third_one", timeRemaining: 1000}]
		}
	}
}