import React, { Fragment } from 'react';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import DataGrid, { FilterRow, HeaderFilter, SearchPanel, Column, Editing,} from 'devextreme-react/data-grid';
import service from './data.js';
import './styles/traceability.css'

const saleAmountEditorOptions = { format: 'currency', showClearButton: true };

class Traceability extends React.Component {
  
 
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.logEvent = this.logEvent.bind(this);
    this.onEditingStart = this.logEvent.bind(this, 'EditingStart');
    this.onInitNewRow = this.logEvent.bind(this, 'InitNewRow');
    this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
    this.onRowInserted = this.logEvent.bind(this, 'RowInserted');
    this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
    this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
    this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving');
    this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved');
    this.onSaving = this.logEvent.bind(this, 'Saving');
    this.onSaved = this.logEvent.bind(this, 'Saved');
    this.onEditCanceling = this.logEvent.bind(this, 'EditCanceling');
    this.onEditCanceled = this.logEvent.bind(this, 'EditCanceled');

    this.clearEvents = this.clearEvents.bind(this);
    this.orders = service.getOrders();
    this.applyFilterTypes = [{
      key: 'auto',
      name: ''
    }, {
      key: 'onClick',
      name: ''
    }];
    this.saleAmountHeaderFilter = [{
      text: 'Less than 10',
      value: ['Number of emails received', '<', 10]
    }, {
      text: '10 - 25',
      value: [
        ['Number of emails received', '>=', 10],
        ['Number of emails received', '<', 25]
      ]
    }, {
      text: '26 - 50',
      value: [
        ['Number of emails received', '>=', 26],
        ['Number of emails received', '<', 50]
      ]
    }, {
      text: '51 - 70',
      value: [
        ['Number of emails Received', '>=', 51],
        ['Number of emails received', '<', 70]
      ]
    }, {
      text: 'Greater than 75',
      value: ['Number of emails Received', '>=', 75]
    }];
    
    this.state = {
      showFilterRow: true,
      showHeaderFilter: true,
      currentFilter: this.applyFilterTypes[0].key
    };
    this.dataGrid = null;
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
    this.onShowFilterRowChanged = this.onShowFilterRowChanged.bind(this);
    this.onShowHeaderFilterChanged = this.onShowHeaderFilterChanged.bind(this);
    this.onCurrentFilterChanged = this.onCurrentFilterChanged.bind(this);
  }

  logEvent(eventName) {
    this.setState((state) => {
      return { events: [eventName].concat(state.events) };
    });
  }

  clearEvents() {
    this.setState({ events: [] });
  }

  render() {
    return (
      <Fragment>
     
      <div  className='ContainerT'>
       <div className='headerT'>
         <h3 className='Tickets'>TICKETS</h3>
         <div className='Excel'>Export to Exel</div>
         <div className='Date'>Asig for Day</div>
       </div>
        <DataGrid id="gridContainer"
          alignment="right"
          ref={(ref) => this.dataGrid = ref}
          dataSource={this.orders}
          showBorders={true}
          allowColumnReordering={true}
          onEditingStart={this.onEditingStart}
          onInitNewRow={this.onInitNewRow}
          onRowInserting={this.onRowInserting}
          onRowInserted={this.onRowInserted}
          onRowUpdating={this.onRowUpdating}
          onRowUpdated={this.onRowUpdated}
          onRowRemoving={this.onRowRemoving}
          onRowRemoved={this.onRowRemoved}
          onSaving={this.onSaving}
          onSaved={this.onSaved}
          onEditCanceling={this.onEditCanceling}
          onEditCanceled={this.onEditCanceled}
          
          
          >
          <Editing
            mode="row"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true} />

          <FilterRow visible={this.state.showFilterRow}
            applyFilter={this.state.currentFilter} />
          <HeaderFilter visible={this.state.showHeaderFilter} />
         {/*  <SearchPanel visible={true}
            width={240}
            placeholder="Search..." /> */}
          <Column dataField="Assigned Agent"
            alignment="right"
            width={180}
            caption="Assigned Agent">
           <HeaderFilter allowSearch={true} />
         
           </Column>
          <Column dataField="Team"
            alignment="right"
            width={140}
            caption="Team">
            <HeaderFilter allowSearch={true} />
          </Column>
          <Column dataField="Customer ID"
            alignment="right"
            width={140}
            caption="Customer ID">
            <HeaderFilter allowSearch={true} />
          </Column>
          <Column dataField="Start Date"
            alignment="right"
            dataType="datetime"
            format="M/d/yyyy, HH:mm"
            width={180}
            calculateFilterExpression={this.calculateFilterExpression}>
            <HeaderFilter dataSource={this.orderHeaderFilter} />
          </Column>
          <Column dataField="End Date"
            alignment="right"
            dataType="datetime"
            format="M/d/yyyy, HH:mm"
            width={180} />
            
            <Column dataField="Emails Received"
            alignment="right"
            width={140}
            caption="Emails Received">
            <HeaderFilter groupInterval={75} />
          </Column>
         
          <Column dataField="Status"
            caption="Status"
            alignment="right"
            width={140} >
            <HeaderFilter allowSearch={true} />
          </Column>


         
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Apply Filter </span>
            <SelectBox items={this.applyFilterTypes}
              value={this.state.currentFilter}
              onValueChanged={this.onCurrentFilterChanged}
              valueExpr="key"
              displayExpr="name"
              disabled={!this.state.showFilterRow} />
          </div>
          <div className="option">
            <CheckBox text="Filter Row"
              value={this.state.showFilterRow}
              onValueChanged={this.onShowFilterRowChanged} />
          </div>
          <div className="option">
            <CheckBox text="Header Filter"
              value={this.state.showHeaderFilter}
              onValueChanged={this.onShowHeaderFilterChanged} />
          </div>
        </div>
      </div>
       
        
       </Fragment>
    );
    
  }

  calculateFilterExpression(value, selectedFilterOperations, target) {
    let column = this;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
    }
    return column.defaultCalculateFilterExpression.apply(this, arguments);
  }

  colorFilterStatus(value, selectedFilterOperations, target) {
    let column = this;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
    }
    return column.defaultCalculateFilterExpression.apply(this, arguments);
  }
  
  orderHeaderFilter(data) {
    data.dataSource.postProcess = (results) => {
      results.push({
        text: 'Weekends',
        value: 'weekends'
      });
      return results;
    };
  }
  onShowFilterRowChanged(e) {
    this.setState({
      showFilterRow: e.value
    });
    this.clearFilter();
  }
  onShowHeaderFilterChanged(e) {
    this.setState({
      showHeaderFilter: e.value
    });
    this.clearFilter();
  }
  onCurrentFilterChanged(e) {
    this.setState({
      currentFilter: e.value
    });
  }
  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }
}

function getOrderDay(rowData) {
  return (new Date(rowData.OrderDate)).getDay();
}


export default Traceability;
