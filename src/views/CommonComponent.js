import React from 'react';
import { LocaleProvider, Layout, Form, Input, Menu, Select,Checkbox, Radio, DatePicker,
  Modal, Icon, Avatar, Table, Button, Row, Col, Card, Divider, Tag, Tabs,Upload, message
} from 'antd';
const {TextArea} = Input;
const CheckboxGroup = Checkbox.Group;
import CommonComponentTab from './CommonComponentTab';
import GoogleMaps from 'google-map-react';
import moment from 'moment';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class CommonComponent extends React.Component{
  state = {
    value: 1,
  }
  onChangeRangeDate = (dates, dateStrings) => {
  }

  renderDetailsOption = ()=> {
    var DetailsOption = [];
    DetailsOption     = this.props.options.map((obj,i)=>{
      return (
        <Option value={i}>{obj.title}</Option>
      )
    });
    return DetailsOption;
  }
  handleChangeDropDown = () => {

  }
  onChange = (date, dateString) => {
  }

  callback=(key) => {
  }
  
  render (){
    var title = this.props.title ? this.props.title :'';
    var type  = this.props.type ? this.props.type :'';
    var span  = this.props.span ? this.props.span : 24;
    var value = this.props.value ? this.props.value :'';
    var color = this.props.value ? this.props.color :'primary';
    var options            = this.props.options ? this.props.options : [];
    var placeholder        = this.props.placeholder ? this.props.placeholder :'';
    var items              = this.props.items ? this.props.items : {};
    var disabled           = this.props.disabled ? this.props.disabled :true;
    var detailsTabs        = this.props.items.detailsTabs ? this.props.items.detailsTabs : []; 
    var detailsDropDown    = this.props.items.detailsDropDown ? this.props.items.detailsDropDown : []; 
    var detailsCheckList   = this.props.items.detailsCheckList ? this.props.items.detailsCheckList : []; 
    var detailsRadioButton = this.props.items.detailsRadioButton ? this.props.items.detailsRadioButton : []; 
    var handleChangeUpload = this.props.handleChangeUpload ? this.props.handleChangeUpload : () => {}
    var detailColumn       = this.props.items.detailColumn ? this.props.items.detailColumn : [];
    var detailRow          = this.props.items.detailRow ? this.props.items.detailRow : [];
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    const columns = [{
      title: 'Column1',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Column2',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Column3',
      dataIndex: 'address',
      key: 'address',
    },];
    
    const data = [{
      key: '1',
      name: 'Value 1',
      age: 15,
      address: 'Podium Depan',
    }, {
      key: '2',
      name: 'Value 2',
      age: 15,
      address: 'Podium Tengah',
    }, {
      key: '3',
      name: 'Value 3',
      age: 15,
      address: 'Podium Belakang',

    }];

    switch (type) {
      case 'textinput':
        return (
          <Col span={span} style={{marginBottom: 15,paddingBottom: 10}}>
            <Row style={{marginBottom: 10}}>
              {this.props.title ?
                <span style={{marginBottom: 15}}>{title}</span>
                :
                []
              }
            </Row>
            <Row>
              <Input
                disabled={disabled}
                defaultValue={value}
                placeholder={placeholder}
              />
            </Row>
          </Col>
        )
        break;
      case 'text':
      return (
        <Col span={span} style={{marginBottom: 15,paddingBottom: 10}}>
          <Row style={{marginBottom: 10}}>
            {this.props.title ?
              <span style={{marginBottom: 15}}>{value}</span>
              :
              []
            }
          </Row>
          <Row>
            <Input
              type={'text'}
              disabled={disabled}
              placeholder={placeholder}
            />
          </Row>
        </Col>
      )
      break;
      case 'number':
      return (
        <Col span={span} style={{marginBottom: 15,paddingBottom: 10}}>
          <Row style={{marginBottom: 10}}>
            {this.props.title ?
              <span style={{marginBottom: 15}}>{value}</span>
              :
              []
            }
          </Row>
          <Row>
            <Input
              type={'number'}
              disabled={disabled}
              placeholder={placeholder}
            />
          </Row>
        </Col>
      )
      break;
      case 'email':
      return (
        <Col span={span} style={{marginBottom: 15,paddingBottom: 10}}>
          <Row style={{marginBottom: 10}}>
            {this.props.title ?
              <span style={{marginBottom: 15}}>{value}</span>
              :
              []
            }
          </Row>
          <Row>
            <Input
              type={'email'}
              disabled={disabled}
              placeholder={placeholder}
            />
          </Row>
        </Col>
      )
      break;
      case 'textarea':
        return (
          <Col span={span} style={{marginBottom: 15, paddingBottom: 10}}>
            {this.props.title ?
              <span style={{marginBottom: 10}}>{value}</span>
              :
              []
            }
            <TextArea
              disabled={disabled}
              rows={4}
              placeholder={placeholder}
            />
          </Col>
        )
        break;
      case 'label':
        return (
          <Col span={span} style={{marginBottom: 15, paddingBottom: 10}}>
            {this.props.title ?
              <span style={{marginBottom: 10,fontSize: 16, fontWeight: 18}}>{value=='' ? title : value}</span>
              :
              []
            }
          </Col>
        )
        break;

      case 'dropdown' :
       return (
         <Col span={span} style={{marginBottom: 15, paddingBottom: 10}}>
            <Row style={{marginBottom:10}}>
              {this.props.value ?
                <Row>
                  {this.props.title ?
                    <span style={{fontWeight:'600',fontSize:15}}>{value}</span>
                    :
                    []
                  }
                </Row>
                :
                []
              }
            </Row>
            <Row>
              <Select
                disabled={disabled}
                showSearch
                style={{ width: 300}}
                placeholder={placeholder}
                optionFilterProp="children"
                onChange={()=>this.handleChangeDropDown()}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                { detailsDropDown.length > 0 ? 
                  detailsDropDown.map((obj,i)=>{
                    return (
                      <Option key={i} value={obj.value}>{obj.title}</Option>
                    )
                  })
                  :
                  []
                }
              </Select>
            </Row>
        </Col>
       )
      break;
      case 'button' :
        var styleCancelButton = {
          marginTop:20,
          marginRight:20,
          width:100,
          height:30,
          paddingTop:4,
          paddingBottom:8,
          borderRadius:4,
          backgroundColor:'#ef2f2f',
          cursor:'pointer',
          textAlign:'center',
          color:'#fff',
          fontWeight:'500'
        }
        var styleSubmitButton = {
          marginTop:20,
          marginRight:20,
          width:100,
          height:30,
          paddingTop:4,
          paddingBottom:8,
          borderRadius:4,
          borderColor:'#1890ff',
          backgroundColor:'#1890ff',
          cursor:'pointer',
          textAlign:'center',
          color:'#fff',
          fontWeight:'500'
        }
        if (items.postValue!='' && items.postValue=="Submit"){
          return (
            <Col span={span} style={{marginBottom: 15, paddingBottom: 10}}>
              <Row type="flex">
                <Col>
                  <div style = {styleCancelButton}>Cancel</div>
                </Col>
                <Col>
                  <div style = {styleSubmitButton}>Submit</div>
                </Col>
              </Row>
            </Col>
          )
        }else{
          return (
            <Col span={span} style={{marginBottom: 15, paddingBottom: 10}}>
              <div style = {styleCancelButton}>Cancel</div>
            </Col>
          )
        }
      break;
      case 'radio' :
        return (
          <Col span={span} style={{marginBottom:15,paddingBottom:10}}>
            <Row style={{marginBottom:10}}>
              {this.props.title ?
                <span style={{marginBottom: 10}}>{title}</span>
                :
                []
              }
            </Row>
            <Row>
              <RadioGroup style={{width:365}} onChange={this.onChange} value={this.state.value}>
                {detailsRadioButton.length > 0 ?
                  detailsRadioButton.map((obj,i)=>{
                    return (
                      <Col key={i} span={8}><Radio style={{fontWeight:'500', fontSize:14}} value={obj.value}>{obj.value}</Radio></Col>
                    )
                  })
                  :
                  []
                }
              </RadioGroup>
            </Row>
          </Col>
        );
      break;
      case 'date' :
        return (
          <Col span={span} style={{marginBottom: 15, paddingBottom: 10,marginTop:20}}>
            <Row style={{marginBottom:10}}>
              {this.props.title ?
                <span style={{marginBottom: 10}}>{title}</span>
                :
                []
              }
            </Row>
            <Row>
              <DatePicker disabled={true} style={{width:300}} onChange={()=>this.onChange()} />
            </Row>
          </Col>
        );
      break;
      case 'rangedate' :
        var handleDisableDate=(current)=>{
          var startDate= items.postValue[0].startDate;
          if (startDate){
            return current && current < moment(startDate);
          } else {
            return current && current < moment().endOf('day');
          }
        }
        return (
          <Col span={span} style={{marginBottom: 15, paddingBottom: 10,marginTop:20}}>
            <Row>
              <Col style={{marginBottom:10}}>
                <Row style={{marginBottom:10}}>{this.props.value ? this.props.value.startDate : ''}</Row>
                <Row>
                  <DatePicker 
                    style={{width:300}} 
                    value={items.postValue.length > 0 ? moment(items.postValue[0].startDate) : moment()}
                    disabled
                    format="YYYY/MM/DD"
                    onChange={this.onChangeRangeDate}
                  />
                </Row>
              </Col>
              <Col>
                <Row style={{marginBottom:10}}>{this.props.value ? this.props.value.endDate : ''}</Row>
                <Row>
                  <DatePicker 
                    style={{width:300}}
                    disabledDate={handleDisableDate.bind(this)} 
                    value={items.postValue.length > 0 ? moment(items.postValue[0].endDate) :moment}
                    disabled
                    format="YYYY/MM/DD"
                    onChange={this.onChangeRangeDate}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        );
      break;
      case 'table':
        return(
          <Col span={span} style={{marginBottom:15,paddingBottom:10,marginTop:20}}>
            <Row style={{marginBottom:10}}>
              {this.props.title ?
                <span style={{marginBottom: 10}}>{title}</span>
                :
                []
              }
            </Row>
            <Row>
              <Table columns={detailColumn} dataSource={detailRow} /> 
            </Row>
          </Col>
        )
      break;
      case 'tab' : 
        return (
          <Col span={span} style={{marginBottom:15,paddingBottom:10,marginTop:20}}>
            <Tabs onChange={()=>this.callback()} type="card">
              {detailsTabs.length > 0 ?
                detailsTabs.map((obj,i)=>{
                  return (
                    <TabPane style={{backgroundColor:'#fafafa',padding:10,borderRadius:3}} tab={obj.value} key={i}> 
                      <Row span={24}>{
                        obj.componentTabs.map((compTab,t)=>{
                          return (
                            <Row 
                            data-key={t}
                            style={{backgroundColor:'#fafafa',borderWidth:2, padding:5,borderColor:'#fff'}}
                            key={t} type='flex' justify='left' align='middle'>
                              <CommonComponentTab
                                key={t}
                                 items={compTab}
                                index={t}
                                title={compTab.title}
                                value={compTab.value}
                                color={compTab.color}
                                placeholder={compTab.placeholder}
                                type={compTab.type}
                                span={20}
                                handleChangeUpload={this.handleChangeUpload}
                              />
                            </Row>
                          )
                        })}
                      </Row>
                    </TabPane>
                  )
                })
                :
                []
              }
            </Tabs>
          </Col>
        )
      break;
      case 'checklist' : 
      return (
        <Col span={span} style={{marginBottom:15,paddingBottom:10,marginTop:20}}>
            <Col>
              <Row style={{marginBottom:10}}>
                {this.props.title ?
                  <span style={{marginBottom: 10, fontWeight:'600',fontSize:15}}>{value}</span>
                  :
                  []
                }
              </Row>
            </Col>
           <Checkbox.Group style={{ width: '100%' }}>
            {detailsCheckList.length > 0 ?
                detailsCheckList.map((obj,i)=>{
                  return (
                    <Col key={i} span={8}><Checkbox style={{fontWeight:'500', fontSize:14}} value={obj.value}>{obj.value}</Checkbox></Col>
                  )
                })
                :
                []
              }
            </Checkbox.Group>
        </Col>
      )
      break;
      case 'file' : 
        const props = {
          name: 'file',
          action: '//jsonplaceholder.typicode.com/posts/',
          headers: {
            authorization: 'authorization-text',
          },
          handleChangeUpload
        };
        return (
          <Col span={span} style={{marginBottom:15,paddingBottom:10,marginTop:20}}>
              <Col>
                <Row style={{marginBottom:10}}>
                  {this.props.value ?
                    <span style={{marginBottom: 10, fontWeight:'600',fontSize:15}}>{value}</span>
                    :
                    []
                  }
                </Row>
              </Col>
              <Upload {...props}>
                <Button disabled={true}>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
          </Col>
        )
      break;

      case 'map' :  
        const MarkComponent = ({ desc }) => <div><Icon style={{color:'#f22f2f', fontSize:20, fontWeight:'800'}} type="environment" theme="filled" />{desc}</div>;
        return (
          <Col span={span} style={{marginBottom:15,paddingBottom:10,marginTop:20}}>
              <Col>
                <Row style={{marginBottom:10}}>
                  {items.title!='' ?
                    <span style={{marginBottom: 10, fontWeight:'600',fontSize:15}}>{title}</span>
                    :
                    []
                  }
                </Row>
                <Row type={'flex'} align={'center'}>
                  <Col span={24}>
                    <div style={{ height: '100vh', width: '100%'}}>
                      <GoogleMaps
                        bootstrapURLKeys={{ key:'AIzaSyBHL-hz-eBvTvpgC4R5E8I4T6RRzC7hTsY'}}
                        defaultCenter={items.markValue.center}
                        center = {items.markValue.center}
                        defaultZoom={items.markValue.zoom}
                      >
                        <MarkComponent
                          lat={items.markValue.mark.lat}
                          lng={items.markValue.mark.lng}
                          v={''}
                        />
                      </GoogleMaps>
                    </div>
                  </Col>
                </Row>
              </Col>
          </Col>
        )
      break;
      default:
        return(
          <div>
          <span  style={{color:'red', fontSize: 14, fontWeight: '500'}}>Component ini belum dibuat !</span>
          </div>
        )
    }
  }
}
export default CommonComponent;
