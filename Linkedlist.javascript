//linkedlist code frome a brother
//js code

class Node{
  constructor(data, next=null){
    this.data=data;
    this.next=next;
    }
  }
class linkList{
  constructor(){
    this.head=null;
    this.size=0;
   } 
  insert(data){
    this.head=new Node(data,this.head);
   } 
  insertadd(data){
    var node=new Node(data) ;
    var tail=null;
    if(!this. head){
      this.head=node;
     }else{
       tail=this.head;
      while(tail.next){
        tail=tail.next;
       } 
       tail.next=node;
       this.size++;
      } 
   } 
 } 
  var list=new linkList();
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);
list.insert(9);
console.log(list);
