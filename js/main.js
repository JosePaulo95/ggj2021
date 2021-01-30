var App = new Vue({
  el: "#app",
  data() {
    return {
      grid: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],
      grabbedCell:{
        i: null,
        j: null
      },
      is_testing: false,
      cell_to_circulate_code: 0
    }
  },
  beforeMount(){
    
  },
  mounted(){
    this.runTests(); 
    this.grid = this.createInitialGrid();

    this.animeSetPos(".cell-rubik-aux-parent", 1, -2);
    //this.fill(2,2)
  },
  computed: {
  },
  methods: {
    grab(i, j){
      if(this.isFull(i,j)){
        this.grabbedCell = {i, j};
        AudioController.playSound("grab", this.is_testing);
      }else{
        AudioController.playSound("grab_nothing", this.is_testing);
      }
    },
    release(i=null,j=null){
      if(this.isHolding()){
        if(i==null && j==null){//quer dizer q nenhuma celula recebeu o release, deve ter sido fora
          AudioController.playSound("error", this.is_testing);
        }else if(i==this.grabbedCell.i && j==this.grabbedCell.j){
          //AudioController.playSound("release", this.is_testing);
        }else{
          let movement_on_same_row = (i == this.grabbedCell.i);
          let diference = (this.grabbedCell.i-i)+(this.grabbedCell.j-j);
          let sense = diference==-1||diference==2?+1:-1;

          if(movement_on_same_row){
            
            this.moveLine("row", i, sense);
          }else{
            
            this.moveLine("column", j, sense);
          }

          AudioController.playSound("release", this.is_testing);
        }
      }

      this.grabbedCell = null;
    },
    animeResize(target, scale_points=[1,1]){
      let duration = 2000;

      anime({
        targets: target,
        scale: {
          value: [scale_points[0], scale_points[1]],
          duration: duration
        },
        /*
        opacity: {
          value: [0, 1],
          duration: duration
        },
        */
        complete: function(anim) {
          anime.set(target, {
            scale: 1
          });
        }
      });
    },
    animeTranslate(target, x_direction_points=[0, 0], y_direction_points=[0, 0], callback=null){
      let duration = 500;

      //console.log(y_direction_points);

      anime({
        targets: target,
        translateX: {
          value: [x_direction_points[0]*103+"%", x_direction_points[1]*103+"%"],
          duration: duration
        },
        translateY: {
          value: [y_direction_points[0]*103+"%", y_direction_points[1]*103+"%"],
          duration: duration
        },
        /*
        opacity: {
          value: [0, 1],
          duration: duration
        },
        */
        complete: function(anim) {
          anime.set(target, {
            translateX: 0,
            translateY: 0,
          });
          if(callback){
            callback.call();
          }
        }
      });
    },
    moveLine(direction_code, index, sense){
      if(direction_code == "row"){
        swit.default();
      }else{
        swit.invert();
      }

      let cell_do_meio = '.cell-'+swit(index, 1)+'-'+swit(index, 1);
      let cell_lateral_normal = '.cell-'+swit(index, 1-sense)+'-'+swit(index, 1-sense);
      let cell_to_circulate = '.cell-'+swit(index, 1+sense)+'-'+swit(index, 1+sense);
      let cell_aux_rubik = ".cell-rubik-aux";
      this.cell_to_circulate_code = this.grid[swit(index, 1+sense)][swit(index, 1+sense)]

      let callbackFunc = function () {
        this.updateOnGrid(direction_code, index, sense);  
        this.setDisplay(".cell-rubik-aux-parent", false);
      }.bind(this)

      if(!this.is_testing){        
        this.animeTranslate(cell_lateral_normal, swit([0, sense], [0, 0]), swit([0, sense], [0, 0]));
        this.animeTranslate(cell_do_meio,        swit([0, sense], [0, 0]), swit([0, sense], [0, 0]));
        this.animeTranslate(cell_to_circulate,   swit([-3*sense, -2*sense], [0, 0]), swit([-3*sense, -2*sense], [0, 0]), callbackFunc.bind(this));
        this.animeSetPos(cell_aux_rubik, swit(0, index-1), swit(0, index-1));
        this.setDisplay(".cell-rubik-aux-parent", false);
        this.animeTranslate(cell_aux_rubik,      swit([sense, sense*2], [0, 0]), swit([sense, sense*2], [0, 0]));
      }else{
        callbackFunc();
      }
    },
    setDisplay(target, show){
      document.getElementsByClassName('cell-rubik-aux-parent')[0].style.display = show?"block":"none";
    },
    animeSetPos(target, x, y){
      anime.set(target, {
        translateX: x*103+"%",
        translateY: y*103+"%"
      });
    },
    updateOnGrid(direction_code, index, sense){
      if(direction_code == "column"){
        this.updateGridColumn(index, sense);  
        this.checkExecuteMatch(null, index);
      }else{
        this.updateGridRow(index, sense);    
        this.checkExecuteMatch(index, null);
      }    
    },
    updateGridRow(index, sense){
      let a = this.grid[index][0];
      let b = this.grid[index][1];
      let c = this.grid[index][2];

      if(sense>0){
        this.grid[index][0] = c;
        this.grid[index][1] = a;
        this.grid[index][2] = b;
      }else{
        this.grid[index][0] = b;
        this.grid[index][1] = c;
        this.grid[index][2] = a;
      }
      Vue.set(this.grid, index, this.grid[index])
    },
    updateGridColumn(index, sense){
      let a = this.grid[0][index];
      let b = this.grid[1][index];
      let c = this.grid[2][index];
      if(sense>0){
        this.grid[0][index] = c;
        this.grid[1][index] = a;
        this.grid[2][index] = b;
      }else{
        this.grid[0][index] = b;
        this.grid[1][index] = c;
        this.grid[2][index] = a;
      }
      Vue.set(this.grid, 0, this.grid[0])
      Vue.set(this.grid, 1, this.grid[1])
      Vue.set(this.grid, 2, this.grid[2])
    },
  }
});