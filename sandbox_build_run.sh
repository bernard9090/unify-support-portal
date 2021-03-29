#!/usr/bin/env bash
PROJECT_DIR="/var/www/sandbox/unify-support-portal"
pid_file="$PROJECT_DIR/app.pid"
PROJECT_NAME="USSD portal React"
PORT=7990
case "$1" in
	start)
		  echo "Starting $PROJECT_NAME"
		    yarn
		      yarn run prod
		        yarn run start -p $PORT -n &
			  ps aux | grep -v grep | grep "yarn run start -p $PORT"  | awk '{print $2}' > $pid_file
			    pid=$(cat $pid_file)
			      echo "Started $PROJECT_NAME WITH PID: $pid on port: $PORT"
			        ;;
			stop)
				  echo "Stopping $PROJECT_NAME"
				    kill -9 $(cat $pid_file)
				      echo "Stopped $PROJECT_NAME: $(cat $pid_file)"
			 	        ;;
				restart)
					  echo "Stopping $PROJECT_NAME"
					    kill -9 $(cat $pid_file)
					      echo "Stopped $PROJECT_NAME: $(cat $pid_file)"
					        echo "Starting $PROJECT_NAME"
						  yarn
						    yarn run prod
						      yarn run start -p $PORT -n &
						        ps aux | grep -v grep | grep "yarn run start -p $PORT"  | awk '{print $2}' > $pid_file
							  pid=$(cat $pid_file)
							    echo "Started $PROJECT_NAME WITH PID: $pid on port: $PORT"
							      ;;
						      *)
							      echo "Usage: $0 {start|stop|restart}"
							      exit 1
							      ;;
					      esac
