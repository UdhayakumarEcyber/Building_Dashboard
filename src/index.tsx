import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, DataTable, Button, RadialGauge, WidgetWrapper, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

interface IGaugeWidgetProps {
    uxpContext?: IContextProvider;
    title: string;
    model: string;
    action: string;
    refreshInterval: string;
    label: string;
    min:string;
    max:string;
    colors:string;
}

const Building_DashboardWidget: React.FunctionComponent<IWidgetProps> = (props) => { 
 
    let [selected, setSelected] = React.useState<string | null>("op-1"); 
    
   const list = [
    {
        id: 'a',
        energy: 'electricity', 
        perc_value : "10",
        kilowatt : "0",
        kilowatt_value : "kWh",
        icon : "https://static.iviva.com/images/uxp-generic-widgets/electricity.png",
        speed_meter_count : '09'
    },
    {
        id: 'b',  
        energy: 'orders', 
        perc_value : "10",
        kilowatt : "0",
        kilowatt_value : "kWh",
        icon : "https://static.iviva.com/images/uxp-generic-widgets/gas-icon.svg",
        speed_meter_count : '09'
    },
    {
        id: 'c', 
        energy: 'issues', 
        perc_value : "10",
        kilowatt : "0",
        kilowatt_value : "m3",
        icon : "https://static.iviva.com/images/uxp-generic-widgets/water-icon.svg",
        speed_meter_count : '09'
    },
    {
        id: 'd', 
        energy: 'hotspots', 
        perc_value : "10",
        kilowatt : "0",
        kilowatt_value : "MWh",
        icon : "https://static.iviva.com/images/uxp-generic-widgets/chillde-water-icon.svg",
        speed_meter_count : '09'
    },
  ];







    return (
       

        <WidgetWrapper className="building_dashboard">
            <TitleBar title='Utility Baseline Comparison'>

                <div className="rht-title-section">
                    <Select
                        selected={selected}
                        options={[
                            { label: "Today", value: "op-1" },
                            { label: "This Week", value: "op-2" },
                            { label: "This Month", value: "op-3" },
                            { label: "This Year", value: "op-4" },
                        ]}
                        onChange={(value) => { setSelected(value) }}
                        
                        isValid={selected ? selected?.length > 0 : null}
                    />
                
                <Select
                        selected={selected}
                        options={[
                            { label: "Select an item", value: "op-1" }, 
                        ]}
                        onChange={(value) => { setSelected(value) }}
                        
                        isValid={selected ? selected?.length > 0 : null}
                    />
                    </div> 
            
                </TitleBar>   


            <div className="map-widget-box">   
               
                    {list.map((item) => ( 

                            <div className={`${item.energy} box-widget`}>
                            
                                <div className="utility-top">
                                    <p>{item.energy}</p>
                                     <div className="energy-value">
                                         <span>{item.perc_value}%</span>
                                         <div className="arrow down-arrow"></div>
                                     </div> 
                                </div>
                                
                                <div className="energy-sec">
                                    <div className="energy-icon"><img src={item.icon}></img></div>
                                    <h5>{item.kilowatt} {item.kilowatt_value}</h5>
                                </div>
                                
                                <div className="utility-bot"> 
                                     <div className="utility-bot-lft">
                                        <div className="speed_meter-icon"></div>
                                         <span>{item.speed_meter_count} kwh</span> 
                                     </div>  
                                     <div className="compare-sec"> 
                                        <p>Compare</p>
                                        <div className="compare-icon"></div> 
                                     </div>  
                                </div> 

                            </div>    

                         ))}  
            </div> 

    </WidgetWrapper> 

    )
};
 

const Utility_benchmark: React.FunctionComponent<IWidgetProps> = (props) => { 
 
    let [selected, setSelected] = React.useState<string | null>("op-1"); 
 

    const Datalist = [
        {
            id: 'a',
            energy: 'Electricity', 
            consumption_count : "1008",
            consumption_sgd : "SGD 443.52", 
            benchmark_count : "1296",
            benchmark_sgd : "SGD 570.2",
            deviation_count : "288",
            deviation_sgd : "SGD 126.68", 
            quant :"kwh/m",
            quant_sgd :"/m",
            icon : "https://static.iviva.com/images/uxp-generic-widgets/electricity.png",
            arrow_icon : "https://static.iviva.com/images/uxp-generic-widgets/up-red-aarow.svg", 
        },
        {
            id: 'b',   
            energy: 'Water', 
            consumption_count : "5.39",
            consumption_sgd : "SGD 61.6", 
            benchmark_count : "5.36",
            benchmark_sgd : "SGD 61.3",
            deviation_count : "0.03",
            deviation_sgd : "SGD 0.3",  
            quant :"m/m",
            quant_sgd :"/m",
            icon : "https://static.iviva.com/images/uxp-generic-widgets/water-icon.svg",
            arrow_icon : "https://static.iviva.com/images/uxp-generic-widgets/up-red-aarow.svg", 
        },

        {
            id: 'c',   
            energy: 'Chilled water', 
            consumption_count : "199",
            consumption_sgd : "SGD 0.2", 
            benchmark_count : "238",
            benchmark_sgd : "SGD 0.3",
            deviation_count : "39",
            deviation_sgd : "SGD 0.1", 
            quant :"W/m",
            quant_sgd :"/m",
            icon : "https://static.iviva.com/images/uxp-generic-widgets/chillde-water-icon.svg",
            arrow_icon : "https://static.iviva.com/images/uxp-generic-widgets/up-red-aarow.svg", 
        } 
      ];
 
    

    return (
       

        <WidgetWrapper>
            <TitleBar title='Utility Baseline Comparison'>

                <div className="rht-title-section">
                    <Select
                        selected={selected}
                        options={[
                            { label: "Office Tower ", value: "op-1" },
                            { label: "Office Tower 2", value: "op-2" },
                            { label: "Office Tower 3", value: "op-3" },
                            { label: "Office Tower 4", value: "op-4" },
                        ]}
                        onChange={(value) => { setSelected(value) }}
                        
                        isValid={selected ? selected?.length > 0 : null}
                    />
                 

                    </div> 
            
                </TitleBar>   
 


            <div className="utility-widget">   

 
            {/* <table>
                <thead>
                    <tr>
                        <td width="25%">Category</td>
                        <td width="25%">Consumption</td>
                        <td width="25%">Benchmark</td>
                        <td width="25%">Deviation</td>
                    </tr>
                </thead>

                <tbody> 
                   
                    {Datalist.map((item) => (

                        <tr>
                            <td>
                                <div className="energy-icon"><img src={item.icon}></img></div>
                               <p>{item.energy}</p> 
                            </td>

                            <td>
                                <div className="consumption"> 
                                    <p>{item.consumption_count} {item.quant}<em>2</em></p>
                                    <p>{item.consumption_sgd} {item.quant_sgd}<em>2</em></p>
                                </div> 
                            </td>

                            <td>
                                <div className="benchmark"> 
                                    <p className="benchmark-count">{item.benchmark_count} {item.quant}<em>2</em></p>
                                    <p>{item.benchmark_sgd} {item.quant_sgd}<em>2</em></p>
                                </div> 
                            </td>

                            <td>
                                <div className="deviation"> 
                                    <div className="arrow-icon"><img src={item.arrow_icon}></img></div>

                                    <div className="deviation-para">
                                        <p>{item.deviation_count} {item.quant}<em>2</em></p>
                                        <p>{item.deviation_sgd} {item.quant_sgd}<em>2</em></p> 
                                    </div>
                                   

                                </div> 
                            </td> 
                            
                       </tr>

                        ))} 
                    
                </tbody>

                </table> */}



            <div className="dashboard_table">

                <div className="dashboard_table-header">
                    <ul>
                        <li>Category</li>
                        <li>Consumption</li>
                        <li>Benchmark</li>
                        <li>Deviation</li>
                    </ul>
                 </div> 

                <div className="dashboard_table-body">

                   

                   

                    {Datalist.map((item) => ( 
                     <ul>
                    

                        
                    <li>
                                <div className="energy-icon"><img src={item.icon}></img></div>
                                <p>{item.energy}</p> 
                                </li> 

                            <li>
                                <div className="consumption"> 
                                    <p>{item.consumption_count} {item.quant}<em>2</em></p>
                                    <p>{item.consumption_sgd} {item.quant_sgd}<em>2</em></p>
                                </div> 
                                </li> 

                           <li>
                                <div className="benchmark"> 
                                    <p className="benchmark-count">{item.benchmark_count} {item.quant}<em>2</em></p>
                                    <p>{item.benchmark_sgd} {item.quant_sgd}<em>2</em></p>
                                </div> 
                                </li> 

                           <li>
                                <div className="deviation"> 
                                    <div className="arrow-icon"><img src={item.arrow_icon}></img></div>

                                    <div className="deviation-para">
                                        <p>{item.deviation_count} {item.quant}<em>2</em></p>
                                        <p>{item.deviation_sgd} {item.quant_sgd}<em>2</em></p> 
                                    </div> 

                                </div> 
                                </li> 
                            
                            {/* </li>  */}

                            </ul>

                        ))}  
                        
                        
                   

                 </div>
 

                </div>
               
                     

                       

            </div> 

           

    </WidgetWrapper> 

    )
};



export const GaugeWidget: React.FunctionComponent<IGaugeWidgetProps> = (props) => {


 

    return (

        <WidgetWrapper>
            <TitleBar title={props.title || 'Ambient Condition'}>

                    <div className="rht-title-section">
                        <p className="guage-days">Last 7 Days</p> 
                    </div>
                
           </TitleBar>

<div className="guage-overall"> 

            <div className="radial-gauge">
                <RadialGauge
                    value={414}
                    min={0}
                    max={1000}
                    label={() => <> 
                        <h6>CO 2 Level</h6>
                        <p>414 ppm</p> 
                    </>}
                    legend={false}
                    gradient={true}
                    thickness={30}
                    largeTick={5}
                    smallTick={2}
                    colors={[ 
                        {color: 'green', stopAt: 300},  
                        {color: 'orange', stopAt: 600},
                        {color: 'red', stopAt: 1000},
                    ]} 
                />
            </div>

            <div className="radial-gauge mid-radial-gauge">
            <RadialGauge
                    value={24.1}
                    min={0}
                    max={40}
                    label={() => <> 
                        <h6>Temprature</h6>
                        <p>24.1 &deg; C</p> 
                    </>}
                    legend={false}
                    gradient={true}
                    thickness={30}
                    largeTick={5}
                    smallTick={2}
                    colors={[ 
                        {color: 'green', stopAt: 15}, 
                        {color: 'orange', stopAt: 28},
                        {color: 'red', stopAt: 40}, 
                    ]} 
                />
            </div>

            <div className="radial-gauge">


            <RadialGauge
                    value={89.4}
                    min={0}
                    max={100}
                    label={() => <> 
                        <h6>Humidity</h6>
                        <p>89.4%</p> 
                    </>}
                    legend={false}
                    gradient={true}
                    thickness={30}
                    largeTick={5}
                    smallTick={2}
                    colors={[ 
                        {color: 'green', stopAt: 40}, 
                        {color: 'orange', stopAt: 70},
                        {color: 'red', stopAt: 100}, 
                    ]} 
                /> 
                
            </div>

            </div>

        </WidgetWrapper>
     
 

 
    )
};





/**
 * Register as a Widget
 */
registerWidget({
    id: "Building_Dashboard",
    widget: Building_DashboardWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});


registerWidget({
    id: "Utility_benchmark",
    widget: Utility_benchmark,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});


registerWidget({
    id: "gauge-widget", 
    widget: GaugeWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }, 
    }
});



/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "Building_Dashboard",
    label: "Building_Dashboard",
    // click: () => alert("Hello"),
    component: Building_DashboardWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"Building_Dashboard",
    component: Building_DashboardWidget
});
*/