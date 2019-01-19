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
                    <div> ${p.body} </div>
                    </br></br>`
		})

		document.body.innerHTML = output
	}, 3000)
}

function addPost(post, cb) {
	setTimeout(() => {
		posts = [...posts, post]
		cb()
		console.log('"posts" inide "setTimeout" of "addPost()"', posts)
	}, 2000)
}
addPost(p, getPosts)

console.log('"posts" in the glabal scoop', posts)
