# PokeQuiz

Using Machine Learning to make the hardest possible Who's That Pokemon game! Try it out here: [https://ewei068.github.io/pokequiz/](https://ewei068.github.io/pokequiz/)

## Development

Changes to this app can be made in either the data used to generate quiz questions or the frontend website.

### Data

The frontend generates quiz questions by first accessing media for the type of quiz (ex: for sprites, accesses `mystery_sprites`). Then, it loads a set of similarity scores between Pokemon for that type of quiz (ex: `sprite_similarities.json`).

If you would like to modify this data, you must first cache the data from PokeAPI, then make modifications to the way the data is collected or manipulated.

**Getting Started: Data Collection**

Data collection is done in Jupyter Notebook using a virtual environment with Python 3.10.

1. Navigate to `notebooks`.
2. Actviate the virtual environment: `source venv/bin/activate`.
3. Install dependencies: `pip install -r requirements.txt`.
4. Create an ipykernel: `python -m ipykernel install --user --name=pokequiz`.
5. Cache PokeAPI data: open a Jupyter Notebook and run all of `get_pokemon_data.ipynb` using the `pokequiz` kernel.

**Making Changes**

1. Make the changes you want and run them.
2. If adding files that are to be served to the client, put those files in `data/client_data`.
3. For large files that don't need to be served to the client, add them to `.gitignore`.
4. Copy any newly changed or added files in `data/client_data` to their appropriate place in `client/public`.
5. If any `pip` dependencies were changed, run `pip freeze > requirements.txt`.

### Frontend

The frontend website is built with Next.js, exported to a static website, and deployed to GitHub pages with GitHub Actions on the `gh-pages` branch. To modify the frontend, make changes and verify the static website is exported successfully.

**Getting Started**

1. Navigate to `client`.
2. Install dependencies: `npm install`.
3. Run local dev server: `npm run dev`.

**Making Changes**

1. Make the changes you want, which should be reflected in your dev server.
2. After satisfied, export the static website: `npm run build` and `npm run export`.
3. Deploy the static website:
    1. Install `http-server`: `npm install -g http-server`.
    2. Navigate to `client/out`.
    3. Run `http-server`.
4. Visit the link and that your changes were successful.

## Credits

* Thumbnail Icon: <a href="https://iconscout.com/icons/pokemon" target="_blank">Pokemon Icon</a> by <a href="https://iconscout.com/contributors/mcgandhi61" target="_blank">Mohit Gandhi</a>

