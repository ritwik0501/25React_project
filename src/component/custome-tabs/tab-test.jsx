import Tabs from "./tab";

function Randomcomponent(){
    return <h1>Some random component</h1>;
}
export default function Tabtest(){

    const tabs=[{
        label:"Tab1",
        content:<div>This is content for Tab 1</div>
    },
    {
        label:"Tab2",
        content:<div>This is content for Tab2</div>
    },
    {
        label:"Tab 3",
        content:<Randomcomponent/>
    }
];
function handlechange(currentTabIndex) {
    console.log(currentTabIndex);
  }
return <Tabs tab={tabs} onChange={handlechange}/>;
}