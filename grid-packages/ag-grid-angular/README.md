![alt text](./github-banner.png "AG Grid")

[![CDNJS](https://img.shields.io/cdnjs/v/ag-grid)](https://cdnjs.com/libraries/ag-grid) [![npm](https://img.shields.io/npm/dm/ag-grid-angular)](https://www.npmjs.com/package/ag-grid-angular) [![Bundle Phobia](https://badgen.net/bundlephobia/minzip/ag-grid-angular)](https://bundlephobia.com/result?p=ag-grid-angular) [![Github Stars](https://img.shields.io/github/stars/ag-grid/ag-grid?style=social)](https://github.com/ag-grid/ag-grid) [![Twitter](https://img.shields.io/twitter/follow/ag_grid?style=social)](https://twitter.com/ag_grid)

AG Grid Angular Component
------

AG Grid is a fully-featured and highly customizable JavaScript data grid.
It delivers [outstanding performance](https://www.ag-grid.com/example.php?utm_source=ag-grid-angular-readme&utm_medium=repository&utm_campaign=github#/performance/1), has no 3rd party dependencies and integrates smoothly with Angular as Angular Component. Here's how our grid looks like with multiple filters and grouping enabled:

![alt text](./github-grid-demo.jpg "AG Grid")

<br/>Version 22.1.1 of <code>ag-grid-angular</code> is the last version that supports Angular 5 and before.<br/>Version 23 onwards of <code>ag-grid-angular</code> will support Angular 6+ only.

Features
--------------

Besides the standard set of features you'd expect from any grid:

* Column Interactions (resize, reorder, and pin columns)
* Pagination
* Sorting
* Row Selection

Here are some of the features that make AG Grid stand out:

* Grouping / Aggregation*
* Custom Filtering
* In-place Cell Editing
* Records Lazy Loading *
* Server-Side Records Operations *
* Live Stream Updates
* Hierarchical Data Support & Tree View *
* Customizable Appearance
* Customizable Cell Contents
* Excel-like Pivoting *
* State Persistence
* Keyboard navigation
* Data Export to CSV
* Data Export to Excel *
* Row Reordering
* Copy / Paste 
* Column Spanning
* Pinned Rows
* Full Width Rows

\* The features marked with an asterisk are available in the [enterprise version](https://www.ag-grid.com/license-pricing.php?utm_source=ag-grid-angular-readme&utm_medium=repository&utm_campaign=github) only.

Check out [developers documentation](https://www.ag-grid.com/documentation-main/documentation.php?utm_source=ag-grid-angular-readme&utm_medium=repository&utm_campaign=github) for a complete list of features or visit [our official docs](https://www.ag-grid.com/features-overview?utm_source=ag-grid-angular-readme&utm_medium=repository&utm_campaign=github) for tutorials and feature demos.

Usage Overview
--------------

Use the setup instructions below or go through [a 5-minute-quickstart guide](https://www.ag-grid.com/react-grid?utm_source=ag-grid-angular-readme&utm_medium=repository&utm_campaign=github).

#### Install dependencies

    $ npm i --save ag-grid-community ag-grid-angular

#### Import `AgGridModule` and add it to the `App` module

	import { AgGridModule } from 'ag-grid-angular';

	@NgModule({
	  declarations: [AppComponent],
	  imports: [BrowserModule, AgGridModule.withComponents([])],
	  providers: [],
	  bootstrap: [AppComponent]
	})
	export class AppModule {}

### Import styles in `styles.css`

    @import "~ag-grid-community/dist/styles/ag-grid.css";
    @import "~ag-grid-community/dist/styles/ag-theme-balham.css";

### Set the grid's configuration in a parent component

	export class AppComponent {
		title = 'app';

		columnDefs = [
			{headerName: 'Make', field: 'make' },
			{headerName: 'Model', field: 'model' },
			{headerName: 'Price', field: 'price'}
		];

		rowData = [
			{ make: 'Toyota', model: 'Celica', price: 35000 },
			{ make: 'Ford', model: 'Mondeo', price: 32000 },
			{ make: 'Porsche', model: 'Boxster', price: 72000 }
		];
	}

### Render the grid as the `ag-grid-angular` child component

	<ag-grid-angular 
		style="width: 500px; height: 500px;" 
		class="ag-theme-balham"
		[rowData]="rowData" 
		[columnDefs]="columnDefs">
	</ag-grid-angular>

Issue Reporting
----------
If you have found a bug, please report them at this repository `issues` section. If you're using Enterprise version please use the private ticketing system to do that. For more information on support check out our [dedicated page](https://www.ag-grid.com/support.php?utm_source=ag-grid-angular-readme&utm_medium=repository&utm_campaign=github).


Asking Questions
-------------

Look for similar problems on [StackOverflow](https://stackoverflow.com/questions/tagged/ag-grid) using the `ag-grid` tag. If nothing seems related, post a new message there. Do not use GitHub issues to ask questions.

Contributing
------------
AG Grid is developed by a team of co-located developers in London. If you want to join the team check out our [jobs listing](https://www.ag-grid.com/ag-grid-jobs-board?utm_source=ag-grid-angular-readme&utm_medium=repository&utm_campaign=github) or send your application to info@ag-grid.com.

License
------------------
This project is licensed under the MIT license. See the [LICENSE file](./LICENSE.txt) for more info.
