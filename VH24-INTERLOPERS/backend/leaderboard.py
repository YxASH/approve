from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)

# Database configuration
db_config = {
    'host': 'sql12.freesqldatabase.com',
    'user': 'sql12735401',
    'password': 'RDh4zLdkk2',
    'database': 'sql12735401'
}

@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    try:
        # Connect to the database
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # Query leaderboard data with necessary fields and rank based on time, efficiency, and player_points
        cursor.execute("""
            SELECT 
                id, 
                name, 
                player_points AS points, 
                time_factor AS time, 
                efficiency_factor AS efficiency 
            FROM leaderboard 
            ORDER BY time_factor ASC, efficiency_factor DESC, player_points DESC
        """)
        leaderboard_data = cursor.fetchall()

        # Close the cursor and connection
        cursor.close()
        conn.close()

        # Add ranks to the data (based on the new order)
        for idx, player in enumerate(leaderboard_data):
            player['rank'] = idx + 1

        # Return the data as JSON
        return jsonify(leaderboard_data)

    except Error as e:
        print(f"Database error: {e}")
        return jsonify({"error": "Internal Server Error"}), 500


if __name__ == '__main__':
    app.run(debug=True)
