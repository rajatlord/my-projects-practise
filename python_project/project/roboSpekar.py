import os 

print("Welcome to ROBOSPEAKER 1.1 created by Rajat")
while True :
    x = input("Enter what you want me to speak")
    if x == "q":
        os.system("say 'bye bye friend'")
        break 
    command = f"PowerShell -Command Add-Type –AssemblyName System.Speech; (New-Object System.Speech.Synthesis.SpeechSynthesizer).Speak{x};"
    os.system(command)