from crypt import methods
from flask import Flask, request, session, redirect, url_for
from flask import render_template
from datetime import datetime
from flask import flash
from flask import session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask (__name__)
app.secret_key = '2\xe4r\xef\xc8\x08' + datetime.now().strftime("%H:%M:%S")
user = {"username": "Klopp", "password": "Klopp1", "last": "Klopp", "first": "Jürgen", "accounttype": "coach", "team":"Liverpool"}

app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:0318@localHost:5432/flaskapp'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
engine = create_engine('postgresql://postgres:0318@localHost:5432/flaskapp')


db = SQLAlchemy(app)


@app.route("/")
def home():
  if session.get("name") == None:
      session["logme"] = 'Do Nothing'
  return render_template("index.html")

@app.route("/services/")
def services():
  return render_template("services.html")

@app.route("/about/")
def about():
  return render_template("about.html")

@app.route("/contact/")
def contactus():
  return render_template("contactus.html")

@app.route("/chart/")
def chart():
  return render_template("chart.html")

@app.route("/myaccount/")
def myaccount():
   if session.get("name") == None:
      session["logme"] = 'login to account'
      return render_template("index.html")
   else:
      session["logme"] = 'Do Nothing'
      useraccount = user['accounttype']
      userteam = user['team']
      return redirect(url_for('.account',useraccount=useraccount,userteam=userteam))

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')   
        session["name"] = username
        if username != user['username'] and password != user['password']:
          session["logme"] = 'Do Nothing'
          return "<h1>Invalid Credentials. Please try again.</h1>" 
        else:
            session["logme"] = 'Do Nothing'
            session["user"] =  user['first'] + ' ' + user['last']
            useraccount = user['accounttype']
            userteam = user['team']
            return redirect(url_for('.account',useraccount=useraccount,userteam=userteam))

@app.route("/account",methods = ['GET','POST'])
def account():
    nested_dict = { 'Salah': {'name': 'Salah','assists': 23,'shots on target': 15,'goals': 20},
				    'Ronaldo': {'name': 'Ronaldo','assists': 20,'shots on target': 20,'goals': 23},
                    'Messi': {'name': 'Messi','assists': 35,'shots on target': 19,'goals': 24},
                    'Neymar': {'name': 'Neymar','assists': 15,'shots on target': 30,'goals': 27},
                  }
    
    if request.method != 'POST':
      accounttype=request.args['useraccount']
      team=request.args['userteam']

    #player 1 dictionary:
    player1={
        'name':'Salah',
        'assists': 23,
        'shots on target': 15,
        'goals':20
    }

    #player 2 dictionary:
    player2={
        'name':'Ronaldo',
        'assists': 20,
        'shots on target': 20,
        'goals':23
    }


    if request.method == 'POST':
        requestPlayer1 = request.form.get("player1")
        requestPlayer2 = request.form.get("player2")
        player1=nested_dict[requestPlayer1]
        player2=nested_dict[requestPlayer2]
        accounttype=request.form.get("accounttype")
        team=request.form.get("team")

    return render_template("account.html",player1=player1,player2=player2, accounttype=accounttype,team=team)

@app.route("/logout")
def logout():
    session["name"] = None
    return redirect("/")


@app.route("/addtext")
def addtext():
    return render_template("index.html")

@app.route('/textadd', methods=['POST'])
def textadd():

    emailaddress = request.form['emailaddress']
    
    import psycopg2
    conn = psycopg2.connect(
    database='flaskapp', user= 'postgres', password='0318', host='127.0.0.1', port='5432'
    )
    cursor = conn.cursor()
    
# Executing the SQL command
    cursor.execute("INSERT INTO emaillist (emailaddress) VALUES (%s)", [emailaddress])
    
    
# Commit changes in the database
    conn.commit() 

    return render_template("contactus.html")

if __name__ == '__main__':
    db.create_all()
    app.run()

if __name__ == '__main__':
  app.run(debug=True)