---
title: "Cell Renderer"
---


[[only-javascript]]
|By default the grid will create the cell values using simple text. If you want more complex HTML inside the cells you can achieve this using Cell Renderers.

[[only-vue]]
|By default the grid will create the cell values using simple text. If you want more complex HTML inside the cells you can achieve this using Cell Renderers.

[[only-react]]
|<video-section id="9IbhW4z--mg" title="React Cell Renderers" header="true">
|By default the grid will create the cell values using simple text. If you want more complex HTML inside the cells you can achieve this using Cell Renderers.
|</video-section>

[[only-angular]]
|<video-section id="xsafnM77NVs" title="Angular Cell Renderers" header="true">
|By default the grid will create the cell values using simple text. If you want more complex HTML inside the cells you can achieve this using Cell Renderers.
|</video-section>

## Simple Cell Renderer

md-include:simple-renderer-javascript.md
md-include:simple-renderer-angular.md
md-include:simple-renderer-react.md
md-include:simple-renderer-vue.md

## Simple Cell Renderer Example

The example below shows a simple Cell Renderer in action. It uses a Cell Renderer to render a hash (`#`) symbol for each medal won
(instead of the medal count), and the `MedalCellRenderer` defined in the code snippet above for the `Total` column:

<grid-example title='Simple Cell Renderer' name='simple' type='mixed' options='{ "exampleHeight": 460 }'></grid-example>

md-include:component-interface-javascript.md
md-include:component-interface-angular.md
md-include:component-interface-react.md
md-include:component-interface-vue.md

<interface-documentation interfaceName='ICellRendererParams' config='{"hideHeader":false, "headerLevel": 3}' ></interface-documentation>

md-include:params_vue.md

## Registering Cell Renderers with Columns

See the section [registering custom components](/components/#registering-custom-components) for details on registering and using custom Cell Renderers.

## Component Refresh

Component Refresh needs a bit more explanation. Here we go through some of the finer details.

[[only-javascript]]
md-include:component-refresh-general.md
[[only-angular]]
md-include:component-refresh-general.md
[[only-vue]]
md-include:component-refresh-general.md
  
md-include:component-refresh-react.md

### Change Detection

As mentioned in the section on [Change Detection](/change-detection/), the refresh of the Cell will not take place if the value getting rendered has not changed.

md-include:component-lifecycle-javascript.md
md-include:component-lifecycle-angular.md
md-include:component-lifecycle-react.md
md-include:component-lifecycle-vue.md

## Cell Rendering Flow

The diagram below (which is taken from the section [Value Getters & Formatters](/value-getters/)) summarises the steps the grid takes while working out what to render and how to render.

In short, a value is prepared. The value comes using either the `colDef.field` or the `colDef.valueGetter`. The value is also optionally passed through a `colDef.valueFormatter` if it exists. Then the value is finally placed into the DOM, either directly, or by using the chosen `colDef.cellRenderer`.

[[only-javascript]]
|<image-caption src='value-getters/resources/valueGetterFlow.svg' width="55rem" centered="true" alt='Value Getter Flow' constrained='true'></image-caption>
[[only-angular]]
|<image-caption src='resources/valueGetterFlowFw.svg' width="55rem" centered="true" alt='Value Getter Flow' constrained='true'></image-caption>
[[only-react]]
|<image-caption src='resources/valueGetterFlowFw.svg' width="55rem" centered="true" alt='Value Getter Flow' constrained='true'></image-caption>
[[only-vue]]
|<image-caption src='resources/valueGetterFlowFw.svg' width="55rem" centered="true" alt='Value Getter Flow' constrained='true'></image-caption>

## Complementing Cell Renderer Params

On top of the parameters provided by the grid, you can also provide your own parameters. This is useful if you want to
'configure' your Cell Renderer. For example, you might have a Cell Renderer for formatting currency but you need to
provide what currency for your cell renderer to use.

Provide params to a cell renderer using the colDef option `cellRendererParams`.

md-include:complementing-component-javascript.md
md-include:complementing-component-angular.md
md-include:complementing-component-react.md
md-include:complementing-component-vue.md

## Data in Cell Renderers

Sometimes the `data` property in the parameters given to a cell renderer might not be populated. This can happen for
example when using row grouping (where the row node has `aggData` and `groupData` instead of `data`), or when rows are
being loaded in the [Infinite Row Model](/infinite-scrolling/) and do not yet have data. It is best to check that data
does exist before accessing it in your cell renderer, for example:

md-include:data-in-renderer-javascript.md
md-include:data-in-renderer-angular.md
md-include:data-in-renderer-react.md
md-include:data-in-renderer-vue.md

md-include:renderer-function-javascript.md
md-include:renderer-function-angular.md
md-include:renderer-function-vue.md 

<!-- 
// taking these out, as they are regarding using JavaScript Function inside Framework Grid,
// which isn't supported with the new xxxComp attributes.
md-include:renderer-function-react.md
-->

[[only-javascript]]
|[[note]]
|| You might be wondering how the grid knows if you have provided a Cell Renderer component class or
|| a simple function, as JavaScript uses functions to implement classes. The answer is the grid looks
|| for the getGui() method in the prototype of the function (a mandatory method in the cell renderer
|| interface). If the getGui() method exists, it assumes a component, otherwise it assumes a function.

## Complex Cell Renderer Example

The example below shows five columns formatted, demonstrating each of the methods above.

- 'Month' column uses `cellStyle` to format each cell in the column with the same style.
- 'Max Temp' and 'Min Temp' columns uses the Function method to format each cell in the column with the same style.
- 'Days of Air Frost' column uses the Component method to format each cell in the column with the same style
- 'Days Sunshine' and 'Rainfall (10mm)' use simple functions to display icons.

<grid-example title='Cell Renderer' name='cell-renderer' type='mixed'></grid-example>

## Accessing Cell Renderer Instances

After the grid has created an instance of a cell renderer for a cell it is possible to access that instance. This is useful if you want to call a method that you provide on the cell renderer that has nothing to do with the operation of the grid. Accessing cell renderers is done using the grid API `getCellRendererInstances(params)`.

<api-documentation source='grid-api/api.json' section='rendering' names='["getCellRendererInstances"]' ></api-documentation>

An example of getting the cell renderer for exactly one cell is as follows:

```js
// example - get cell renderer for first row and column 'gold'
const firstRowNode = gridOptions.api.getDisplayedRowAtIndex(0);
const params = { columns: ['gold'], rowNodes: [firstRowNode] };
const instances = gridOptions.api.getCellRendererInstances(params);

if (instances.length > 0) {
    // got it, user must be scrolled so that it exists
    const instance = instances[0];
}
```

Note that this method will only return instances of the cell renderer that exists. Due to row and column virtualisation, renderers will only exist for cells that the user can actually see due to horizontal and vertical scrolling.

The example below demonstrates custom methods on cell renderers called by the application. The following can be noted:

- The medal columns are all using the user defined `MedalCellRenderer`. The cell renderer has an arbitrary method `medalUserFunction()` which prints some data to the console.
- The **Gold** method executes a method on all instances of the cell renderer in the gold column.
- The **First Row Gold** method executes a method on the gold cell of the first row only. Note that the `getCellRendererInstances()` method will return nothing if the grid is scrolled far past the first row showing row virtualisation in action.
- The **All Cells** method executes a method on all instances of all cell renderers.

<grid-example title='Get Cell Renderer' name='get-cell-renderer' type='generated'></grid-example>

[[only-angular]]
|### Example: Rendering using more complex Components
|This example illustrates a few different ideas:
|- Custom Cell Renderers
|- Parent/Child Communication using [context](/context/)
|- Storing the Grid API via the "Grid Ready" event, and using it later
|<grid-example title='Simple Dynamic Component' name='dynamic-components' type='mixed' options='{ "extras": ["fontawesome", "bootstrap"] }'></grid-example>
[[only-react]]
|### Example: Rendering using more complex Components
|This example illustrates a few different ideas:
|- Custom Cell Renderers
|- Parent/Child Communication using [context](/context/)
|- Using a `ref` to access `AgGridReact` in order to access the underlying APIs
|<grid-example title='Simple Dynamic Component' name='dynamic-components' type='mixed' options='{ "extras": ["fontawesome", "bootstrap"] }'></grid-example>
[[only-vue]]
|### Example: Rendering using more complex Components
|This example illustrates a few different ideas:
|- Custom Cell Renderers
|- Parent/Child Communication using [context](/context/)
|- Storing the Grid API via the "Grid Ready" event, and using it later
|<grid-example title='Simple Dynamic Component' name='dynamic-components' type='mixed' options='{ "extras": ["fontawesome", "bootstrap"] }'></grid-example>

[[only-react]]
|[[note]] 
||Note that the hook version of this example makes use of `useImperativeHandle` to expose methods to the grid (and other components). Please
||refer to the [hook specific](/react-hooks/) documentation for more information.

[[only-angular]]
|
| ### Example: Rendering using nested Modules
|
| Using more complex Angular Components in the Cell Renderers - specifically how you can use nested `NgModule`'s within the grid.
|
| <grid-example title='Richer Dynamic Components' name='angular-rich-dynamic' type='angular' options='{ "exampleHeight": 380, "extras": ["bootstrap"] }'></grid-example>
