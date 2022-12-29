import {Component} from 'react';
import bag from './bag.jpg';

export class GroceryList extends Component{
    state={
        userInput:'',
        groceryListInput:[]
    }

    onChangeEvent(e) {
        this.setState({userInput:e});
    }

    addItem (input){
        if (input==='') {
            alert ('Please enter an item')
            
            } else{
                let listArray =this.state.groceryListInput;
                listArray.push(input);
                this.setState({groceryListInput: listArray, userInput:''})
            }
        }

            deleteItem() {
                let listArray=this.state.groceryListInput;
                listArray=[];
                this.setState({groceryListInput: listArray})
            }

            crossedWord(e) {
                const li=e.target;
                li.classList.toggle('crossed');
            }

            onFormSubmit(e) {
                e.preventDefault();
            }
        
            render() {
                return(
                    <div>
                        <form onSubmit={this.onFormSubmit}>
                    <div className='container'>
                            <input type='text' placeholder='What do you want to buy?' onChange={(e)=>{this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
                         </div>
                        
                        <div className='container'>
                            <button className='btn-add' onClick={()=>this.addItem(this.state.userInput)}>Add</button>
                            </div>

                            <ul>
                                {this.state.groceryListInput.map((item, index)=>(

                                <li onClick={this.crossedWord} key={index} img src={bag} alt='check-box' width='40px'>
                                {item}
                                </li>
                                ))}
                            </ul>

                            <div className='container'>
                            <button className='btn-delete' onClick={()=>this.deleteItem()}>Delete</button>
                            </div>
                            </form>
                        
                    </div>
                )
            }
    }

    export default GroceryList;
