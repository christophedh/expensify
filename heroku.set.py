import subprocess

config = {
'FIREBASE_API_KEY':'AIzaSyAUvLfgqqm65M-AIFLJahGkJwczH-fawOU',
'FIREBASE_AUTH_DOMAIN':'expensify-5ba3a.firebaseapp.com',
'FIREBASE_DATABASE_URL':'https=//expensify-5ba3a.firebaseio.com',
'FIREBASE_PROJECT_ID':'expensify-5ba3a',
'FIREBASE_STORAGE_BUCKET':'expensify-5ba3a.appspot.com',
'FIREBASE_MESSAGING_SENDER_ID':'503357736040',
'FIREBASE_APP_IP':'1:503357736040=web=a21288319ab0b0e9c827dd',
}

for k,v in config.items():
    command = f'heroku config:set {k}={v}'
    process = subprocess.Popen(command.split(),stdout=subprocess.PIPE)
    output,error =   process.communicate()
    print(output,error)
    # print(command)


