let posts = [
	{
		title: 'Awesome title One',
		body: 'This the body of the awesome title One'
	},
	{
		title: 'Magnificent title Two',
		body: 'This the body of the Magnificent title Two'
	}
]

const p = {
	title: 'Striking title Three',
	body: 'This the body of the Striking title Three'
}

function getPosts() {
	let output = ''
	setTimeout(() => {
		posts.map(p => {
			output += `<h3> --${p.title} </h3>
                        <code> ${p.body}</code>
                    </br></br>`
		})

		document.body.innerHTML = output
	}, 1000)
}

function addPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts = [...posts, post]
			resolve()
			console.log('"posts" inide "setTimeout" of "addPost()"', posts)
		}, 2000)
	})
}

async function init() {
	await addPost(p)

	getPosts()
}

init()

console.log('"posts" in the glabal scoop', posts)
