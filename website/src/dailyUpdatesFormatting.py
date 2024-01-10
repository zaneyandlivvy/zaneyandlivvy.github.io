import datetime
import json

def format_daily_updates():
	# Read the contents of dailyUpdates.txt
	with open('dailyUpdates.txt', 'r') as file:
		lines = file.readlines()

	# Split each line into date and text
	updates = []
	for line in lines:
		i = 0
		while line[i] != ':':
			i += 1
		
		date = line[:i].strip()
		text = line[i+1:].strip()

		# Convert the date in format February 14 to a datetime object in format Tuesday February 14, 2022
		date = datetime.datetime.strptime(date, '%B %d')
		if date.month > 2 or (date.month == 2 and date.day >= 14):
			date = date.replace(year=2023)
		else:
			date = date.replace(year=2024)

		formatted_date = date.strftime('%A, %B %-d, %Y')
		updates.append({'date': formatted_date, 'text': text.strip()})

	# Write the formatted updates to a JSON file
	with open('formatted_updates.json', 'w') as file:
		json.dump(updates, file)

format_daily_updates()