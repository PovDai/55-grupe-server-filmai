import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";
import { moviesListSection } from "../ui/movieList.js";
import { moviesFilterForm } from "../ui/forms/movieFilterForm.js";
import { moviesData } from "../data/movieData.js";

export class PageMovies extends PageTemplate {
    main() {
        return `
            <main>
                ${pageTitle('Movies')}
                ${moviesFilterForm()}
                ${moviesListSection(moviesData)}
            </main>`;
    }
}