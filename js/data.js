var data = [
	{
		"init": [
			{
				"type": "text",
				"id": "text-0-1",
				"text": "Page One",
				"style": {
					"color": "red",
					"font-size": 20,
					"position": "absolute",
					"top": -200,
					"left": -200
				}
			},
			{
				"type": "text",
				"id": "text-0-2",
				"text": "Page One",
				"style": {
					"color": "blue",
					"font-size": 25,
					"position": "absolute",
					"top": 50,
					"left": -200
				}
			}
		],
		// 动画指令
		"animation": [
			{
				"type": "translate",
				"id": "text-0-1",
				"toTop": 30,
				"toLeft": 50,
				"time": 500,
				"delay": 0,
				"isUse": false
			},
			{
				"type": "translate",
				"id": "text-0-2",
				"toTop": 50,
				"toLeft": 80,
				"time": 500,
				"delay": 300,
				"isUse": false
			}
		]
	}, // page one
	{
		"init": [
			{
				"type": "text",
				"id": "text-1-1",
				"text": "Page Two",
				"style": {
					"color": "red",
					"font-size": 20,
					"position": "absolute",
					"top": -200,
					"left": -200
				}
			},
			{
				"type": "text",
				"id": "text-1-2",
				"text": "Page Two",
				"style": {
					"color": "blue",
					"font-size": 25,
					"position": "absolute",
					"top": 50,
					"left": -200
				}
			}
		],

		// 动画指令
		"animation": [
			{
				"type": "translate",
				"id": "text-1-1",
				"toTop": 30,
				"toLeft": 50,
				"time": 100,
				"delay": 0,
				"isUse": false
			},
			{
				"type": "translate",
				"id": "text-1-2",
				"toTop": 50,
				"toLeft": 80,
				"time": 100,
				"delay": 300,
				"isUse": false
			}
		]
	} // page tow
]