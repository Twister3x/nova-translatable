import {MAIN_TITLE} from "../../Configuration/Types/blockTypes";
import {TITLES_CATEGORY} from "../../Configuration/Types/categoryTypes";

const mainTitleCss = `
	.main-title {
		font-family: Forum;
		font-style: normal;
		font-weight: normal;
		font-size: 60px;
		line-height: 70px;
		text-align: center;
		text-transform: uppercase;
    margin-bottom: 80px;
    position: relative;
    z-index: 1;
	}
	
	.main-title::after {
	  content: '';
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  z-index: -1;
	  display: block;
	  width: 961.16px;
		height: 113.71px;
	  border: 1px solid $color-gray;
	  border-radius: 50%;
	  transform: matrix(0.99, 0.1, -0.1, 0.99, 0, 0) translate(-50%, -50%);
	}

    
  .main-title i {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-style: italic;
      text-transform: lowercase;
    }
`;

const mainTitleHtml = `
	<h2 class="main-title">Title</h2>
`;

const mainTitleLabel = 'Главный заголовок<br><svg width="20" height="20" viewBox="0 0 122.88 120.26" style="margin-top: 10px; enable-background:new 0 0 122.88 120.26"><g><polygon points="0,14.54 0,0 49.81,0 49.81,14.54 36.93,17.03 36.93,51.7 85.98,51.7 85.98,17.03 73.1,14.54 73.1,0 85.98,0 110,0 122.88,0 122.88,14.54 110,17.03 110,103.31 122.88,105.79 122.88,120.26 73.1,120.26 73.1,105.79 85.98,103.31 85.98,70.3 36.93,70.3 36.93,103.31 49.81,105.79 49.81,120.26 0,120.26 0,105.79 12.8,103.31 12.8,17.03 0,14.54"/></g></svg>'


export const mainTitle = {
	id: MAIN_TITLE,
	category: TITLES_CATEGORY,
	content: {type: MAIN_TITLE},
	label: mainTitleLabel,

	type: MAIN_TITLE,
	components: mainTitleHtml,
	styles: mainTitleCss,
	highlightable: false,

}