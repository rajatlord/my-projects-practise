import requests
import json
city = input("Enter your city Name : \n")

url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=5be104470b8c2cdccdd6e41134e66c16"

r = requests.get(url)
wdic = json.loads(r.text)
print(wdic["main"]["temp"]) #here i got this code now with another logic

if 'main' in wdic:
    temperature_kelvin = wdic['main']['temp']
    temperature_celsius = temperature_kelvin - 273.15  # Convert to Celsius
    print(f"Temperature in {city}: {temperature_celsius:.2f}°C")
else:
    print("City not found or weather data unavailable.")