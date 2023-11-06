const CLIENT_ID = "addd071529764e90bb548a5b11edc35f"; // can be in the frontend since it's public
const AUTH_URL = `https://accounts.spotify.com/authorize?
					client_id=${CLIENT_ID}
					&response_type=code
					&redirect_uri=http://localhost:3000/
					&scope=streaming
							%20user-read-email%20user-read-private
							%20user-library-read%20user-library-modify
							%20user-read-playback-state%20user-modify-playback-state
							%20user-follow-read%20playlist-read-private
							%20playlist-read-collaborative%20playlist-modify-public
							%20user-read-playback-position%20user-top-read
							%20user-read-recently-played`;

export const Login = () => {
	return (
		<div>
			<h1>Login Page</h1>

			<a className="authorize" href={AUTH_URL}>
				Authorize
			</a>
		</div>
	);
};
