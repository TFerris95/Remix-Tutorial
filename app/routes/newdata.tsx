export const meta = () => {
    return [{ title: 'Data Showcase' }]
  }
  
  export default function NewData() {
    return (
      <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
        <h1>Data Showcase</h1>
        <p>This is my first basic Remix project. Here I will be ccompleting some basic tasks with Remix.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla laoreet, pellentesque quam sed, dictum ligula. Integer vulputate mi sit amet quam posuere ultricies. 
            Pellentesque ullamcorper ultrices mollis. Nam eu tellus ut nulla imperdiet fringilla. Maecenas sollicitudin mollis dictum. 
            Pellentesque elit est, condimentum ut pretium quis, congue in velit. Pellentesque cursus dolor non lectus tristique dignissim. Nulla non placerat turpis. 
            Mauris ac dolor at quam placerat iaculis. Phasellus tempor tempus justo, ac sagittis odio luctus id. Sed maximus nulla eu metus varius malesuada eget at lectus. 
            Ut vel metus a sem scelerisque lobortis non vel mi. Donec et justo rutrum, efficitur risus eget, fermentum est. Proin finibus, eros sit amet finibus pulvinar, turpis dolor volutpat turpis, eget molestie lacus dui quis tellus. 
            Sed sapien nisi, iaculis vel sagittis ac, fermentum ac ex.
        </p>
        <table id="example" border="1" cellPadding="5" cellSpacing="5" width="100%">
	<thead>
		<tr>
			<th>Order</th>
			<th>Description</th>
			<th>Deadline</th>
			<th>Status</th>
			<th>Amount</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>Alphabet puzzle</td>
			<td>2016/01/15</td>
			<td>Done</td>
			<td data-order="1000">€1.000,00</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Layout for poster</td>
			<td>2016/01/31</td>
			<td>Planned</td>
			<td data-order="1834">€1.834,00</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Image creation</td>
			<td>2016/01/23</td>
			<td>To Do</td>
			<td data-order="1500">€1.500,00</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Create font</td>
			<td>2016/02/26</td>
			<td>Done</td>
			<td data-order="1200">€1.200,00</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Sticker production</td>
			<td>2016/02/18</td>
			<td>Planned</td>
			<td data-order="2100">€2.100,00</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Glossy poster</td>
			<td>2016/03/17</td>
			<td>To Do</td>
			<td data-order="899">€899,00</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Beer label</td>
			<td>2016/05/28</td>
			<td>Confirmed</td>
			<td data-order="2499">€2.499,00</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Shop sign</td>
			<td>2016/04/19</td>
			<td>Offer</td>
			<td data-order="1099">€1.099,00</td>
		</tr>
		<tr>
			<td>9</td>
			<td>X-Mas decoration</td>
			<td>2016/10/31</td>
			<td>Confirmed</td>
			<td data-order="1750">€1.750,00</td>
		</tr>
		<tr>
			<td>10</td>
			<td>Halloween invite</td>
			<td>2016/09/12</td>
			<td>Planned</td>
			<td data-order="400">€400,00</td>
		</tr>
		<tr>
			<td>11</td>
			<td>Wedding announcement</td>
			<td>2016/07/09</td>
			<td>To Do</td>
			<td data-order="299">€299,00</td>
		</tr>
		<tr>
			<td>12</td>
			<td>Member pasport</td>
			<td>2016/06/22</td>
			<td>Offer</td>
			<td data-order="149">€149,00</td>
		</tr>
		<tr>
			<td>13</td>
			<td>Drink tickets</td>
			<td>2016/11/01</td>
			<td>Confirmed</td>
			<td data-order="199">€199,00</td>
		</tr>
		<tr>
			<td>14</td>
			<td>Album cover</td>
			<td>2017/03/15</td>
			<td>To Do</td>
			<td data-order="4999">€4.999,00</td>
		</tr>
		<tr>
			<td>15</td>
			<td>Shipment box</td>
			<td>2017/02/08</td>
			<td>Offer</td>
			<td data-order="1399">€1.399,00</td>
		</tr>
		
		<tr>
			<td>16</td>
			<td>Wooden puzzle</td>
			<td>2017/01/11</td>
			<td>Done</td>
			<td data-order="1000">€1.000,00</td>
		</tr>
		<tr>
			<td>17</td>
			<td>Fashion Layout</td>
			<td>2016/01/30</td>
			<td>Planned</td>
			<td data-order="1834">€1.834,00</td>
		</tr>
		<tr>
			<td>18</td>
			<td>Toy creation</td>
			<td>2016/01/10</td>
			<td>To Do</td>
			<td data-order="1550">€1.550,00</td>
		</tr>
		<tr>
			<td>19</td>
			<td>Create stamps</td>
			<td>2016/02/26</td>
			<td>Done</td>
			<td data-order="1220">€1.220,00</td>
		</tr>
		<tr>
			<td>20</td>
			<td>Sticker design</td>
			<td>2017/02/18</td>
			<td>Planned</td>
			<td data-order="2100">€2.100,00</td>
		</tr>
		<tr>
			<td>21</td>
			<td>Poster rock concert</td>
			<td>2017/04/17</td>
			<td>To Do</td>
			<td data-order="899">€899,00</td>
		</tr>
		<tr>
			<td>22</td>
			<td>Wine label</td>
			<td>2017/05/28</td>
			<td>Confirmed</td>
			<td data-order="2799">€2.799,00</td>
		</tr>
		<tr>
			<td>23</td>
			<td>Shopping bag</td>
			<td>2017/04/19</td>
			<td>Offer</td>
			<td data-order="1299">€1.299,00</td>
		</tr>
		<tr>
			<td>24</td>
			<td>Decoration for Easter</td>
			<td>2017/10/31</td>
			<td>Confirmed</td>
			<td data-order="1650">€1.650,00</td>
		</tr>
		<tr>
			<td>25</td>
			<td>Saint Nicolas colorbook</td>
			<td>2017/09/12</td>
			<td>Planned</td>
			<td data-order="510">€510,00</td>
		</tr>
	</tbody>
</table>
      </div>
    )
  }