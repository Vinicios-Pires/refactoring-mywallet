export default async function handleError(error, req, res, next) {
	console.error(error);
	if (error.code === 422) {
		return res.sendStatus(422);
	}

	if (error.code === 409) {
		return res.sendStatus(409);
	}

	if (error.code === 401) {
		return res.sendStatus(401);
	}

	return res.status(500).send("Internal Server Error.");
}
