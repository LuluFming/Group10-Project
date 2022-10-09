from crypt import methods
from flask import Flask, request, session, redirect, url_for
from flask import render_template

app = Flask (__name__)
app.secret_key = 'G10'
user = {"username": "Klopp", "password": "Klopp1", "last": "Klopp", "first": "Jürgen", "accounttype": "coach", "team":"Liverpool"}

@app.route("/")
def home():
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


@app.route('/login', methods=['POST'])
def login():
    error = None
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')   
        if username != user['username'] and password != user['password']:
          error = 'Invalid Credentials. Please try again.'
          return "<h1>Invalid Credentials. Please try again.</h1>" 
        else:
            session['user'] = user['last'] + ' ' + user['first']
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


