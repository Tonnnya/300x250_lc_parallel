(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Car = function() {
	this.initialize(img.Car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,840,747);


(lib.Light = function() {
	this.initialize(img.Light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,130);


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Car();
	this.instance.setTransform(-708,-850.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-708,-850.5,840,747);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Light();
	this.instance.setTransform(-406.55,-610.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-406.5,-610.1,311,130);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhDzAYaQjYAAiZiZQiZiZAAjYMAAAggfQAAjYCZiZQCZiZDYAAMCHnAAAQDYAACZCZQCZCZAADYMAAAAgfQAADYiZCZQiZCZjYAAgEhJFgVhQiMCMAADGMAAAAgfQAADFCMCNQCMCMDGAAMCHnAAAQDGAACMiMQCMiNAAjFMAAAggfQAAjGiMiMQiMiMjGAAMiHnAAAQjGAAiMCMg");
	this.shape.setTransform(-0.034,-0.8105,0.2442,0.2442);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-38.9,237.4,76.3);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgYpAw0MAAAhhnMAxTAAAMAAABhng");
	this.shape.setTransform(19.9782,-157.55,1.1267,0.5469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.8,-328.4,355.6,341.7);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAYIAUgYIgUgXIANAAIATAXIgTAYgAgdAYIAVgYIgVgXIANAAIASAXIgSAYg");
	this.shape.setTransform(62.3,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaAqIgJgaIghAAIgKAaIgMAAIAghTIANAAIAgBTgAAMAGIgMgiIgNAiIAZAAg");
	this.shape_1.setTransform(55.3,11.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAqIAAglIgrAAIAAAlIgMAAIAAhTIAMAAIAAAlIArAAIAAglIAMAAIAABTg");
	this.shape_2.setTransform(47.125,11.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFA2IAAhUIALAAIAABUgAAIgpQgCgCAAgDQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAgAgRgpQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACIACAFIgCAFQgCACgDAAQgDAAgCgCg");
	this.shape_3.setTransform(41.325,10.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaAqIgJgaIghAAIgKAaIgMAAIAghTIANAAIAgBTgAAMAGIgMgiIgNAiIAZAAg");
	this.shape_4.setTransform(35.95,11.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAaAAQAIgBAGAEQAHADADAGQADAGABAIQgBAHgDAGQgDAGgHADQgGAFgIAAIgOAAIAAAegAgOACIALAAQAFAAAEgCQAEgCACgDQACgFABgFQgBgGgCgDQgCgEgEgCQgEgBgFAAIgLAAg");
	this.shape_5.setTransform(29.1,11.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAqIgfgmIgIAAIAAAmIgNAAIAAhTIANAAIAAAlIAHAAIAdglIAOAAIghAoIAlArg");
	this.shape_6.setTransform(22.325,11.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXArIgHgCIADgLIAEACIAGABQAFAAADgDQADgCADgFIghhBIANAAIAZA0IAWg0IANAAIgcA/IgGAMQgDAEgEAEQgEACgIAAIgHAAg");
	this.shape_7.setTransform(14.575,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAFIAAgJIApAAIAAAJg");
	this.shape_8.setTransform(8.55,12.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaAqIgJgaIghAAIgKAaIgMAAIAghTIANAAIAgBTgAAMAGIgMgiIgMAiIAYAAg");
	this.shape_9.setTransform(2.3,11.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgXAAIAAgKIA5AAIAAAKIgXAAIAABJg");
	this.shape_10.setTransform(-4.475,11.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAmQgKgFgGgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQANAAAKAGQAKAGAGAJQAFAKAAAMQAAANgFAKQgGAKgKAFQgKAGgNAAQgMAAgKgGgAgPgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAEAHAIAEQAHAEAIAAQAJAAAIgEQAHgEAEgHQAEgIAAgJQAAgIgEgHQgEgIgHgEQgIgEgJAAQgIAAgHAEg");
	this.shape_11.setTransform(-12.325,11.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXA2IAAhCIguBCIgLAAIAAhUIAMAAIAABCIAthCIAMAAIAABUgAgNgqQgFgEgBgHIAJAAQAAAEADACQADACAEAAQAFAAADgCQADgCAAgEIAIAAQAAAHgFAEQgFAEgJAAQgJAAgEgEg");
	this.shape_12.setTransform(-21.625,10.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAmQgKgFgGgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQANAAAKAGQAKAGAGAJQAFAKAAAMQAAANgFAKQgGAKgKAFQgKAGgNAAQgMAAgKgGgAgPgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAEAHAIAEQAHAEAIAAQAJAAAIgEQAHgEAEgHQAEgIAAgJQAAgIgEgHQgEgIgHgEQgIgEgJAAQgIAAgHAEg");
	this.shape_13.setTransform(-30.925,11.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgXAAIAAgKIA5AAIAAAKIgXAAIAABJg");
	this.shape_14.setTransform(-38.725,11.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AARAYIgSgYIASgXIANAAIgUAXIAUAYgAgJAYIgUgYIAUgXIAMAAIgUAXIAUAYg");
	this.shape_15.setTransform(-44.875,12.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_16.setTransform(-51.925,11.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_17.setTransform(-54.925,11.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVAqIAAhJIgpAAIAABJIgNAAIAAhTIBDAAIAABTg");
	this.shape_18.setTransform(-60.7,11.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaArIAAhVIAaAAQAIAAAHAEQAGADADAGQADAGAAAIQAAAHgDAHQgDAEgGAEQgHAEgIAAIgOAAIAAAggAgOABIAMAAQAEAAAEgBQAEgCACgEQACgEABgFQgBgGgCgEQgCgDgEgBQgEgCgEAAIgMAAg");
	this.shape_19.setTransform(78.7,-8.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAmQgKgFgGgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQANAAAKAGQAKAGAGAJQAFAKAAAMQAAANgFAKQgGAKgKAFQgKAGgNAAQgMAAgKgGgAgPgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAEAHAIAEQAHAEAIAAQAJAAAIgEQAHgEAEgHQAEgIAAgJQAAgIgEgHQgEgIgHgEQgIgEgJAAQgIAAgHAEg");
	this.shape_20.setTransform(70.175,-8.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFArIAAhKIgXAAIAAgLIA5AAIAAALIgXAAIAABKg");
	this.shape_21.setTransform(62.375,-8.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAnQgKgFgGgIQgGgJgBgLIgOAAIAAAlIgNAAIAAhUIANAAIAAAlIAOAAQABgMAGgIQAGgJAKgFQAIgFAMAAQANAAAKAGQAKAGAGAJQAGAKAAAMQAAANgGAKQgGAKgKAFQgKAGgNAAQgMAAgIgFgAgCgbQgHAEgEAIQgFAHAAAIQAAAJAFAIQAEAHAHAEQAGAEAJAAQAKAAAHgEQAHgEAEgHQAEgIAAgJQAAgIgEgHQgEgIgHgEQgHgEgKAAQgJAAgGAEg");
	this.shape_22.setTransform(53.175,-8.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAMIAIgYIALAAIgKAYg");
	this.shape_23.setTransform(45.325,-11.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcArIAAhVIAuAAIAAAMIgiAAIAAAXIARAAQAJABAHADQAGADADAEQADAGAAAHQAAAIgDAFQgDAGgGADQgHADgJABgAgQAgIAQAAQAIAAAEgEQAEgEABgHQgBgHgEgDQgEgEgIAAIgQAAg");
	this.shape_24.setTransform(41,-8.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAXArIAAhCIguBCIgLAAIAAhVIAMAAIAABCIAthCIAMAAIAABVg");
	this.shape_25.setTransform(32.775,-8.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbArIAAhVIAaAAQAJAAAHAEQAGADADAGQAEAGgBAIQABAHgEAHQgDAEgGAEQgHAEgJAAIgNAAIAAAggAgOABIAMAAQAEAAAEgBQAEgCADgEQABgEABgFQgBgGgBgEQgDgDgEgBQgEgCgEAAIgMAAg");
	this.shape_26.setTransform(25.35,-8.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFArIAAhKIgXAAIAAgLIA5AAIAAALIgXAAIAABKg");
	this.shape_27.setTransform(18.775,-8.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAmQgKgFgGgKQgFgKAAgNQAAgMAFgKQAHgKAJgFQALgGAMAAQAHAAAIADQAHACAGAEIgFALIgLgGQgFgCgHAAQgJAAgHAEQgHAEgFAHQgEAIAAAIQAAAJAEAIQAFAHAHAEQAHAEAJAAQAHAAAHgCQAGgDAFgEIAEALQgHAFgHADQgHACgJAAQgMAAgKgGg");
	this.shape_28.setTransform(11.9,-8.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAXArIAAhCIguBCIgLAAIAAhVIAMAAIAABCIAthCIAMAAIAABVg");
	this.shape_29.setTransform(3.325,-8.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAeA1IAAgVIg7AAIAAAVIgLAAIAAggIAGAAQADAAACgCIADgHIACgKIAGg2IAwAAIAABJIALAAIAAAggAgMADIgCAMQgCAFgCABIAjAAIAAg+IgYAAg");
	this.shape_30.setTransform(-5.275,-7.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAXA2IAAhCIguBCIgLAAIAAhUIAMAAIAABBIAthBIAMAAIAABUgAgNgqQgFgEgBgHIAJAAQAAAEADACQADACAEgBQAFABADgCQADgCAAgEIAIAAQAAAHgFAEQgFAEgJAAQgJAAgEgEg");
	this.shape_31.setTransform(-16.075,-10);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAXArIAAhCIguBCIgLAAIAAhVIAMAAIAABCIAthCIAMAAIAABVg");
	this.shape_32.setTransform(-24.925,-8.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWArIAAglIgrAAIAAAlIgMAAIAAhVIAMAAIAAAmIArAAIAAgmIAMAAIAABVg");
	this.shape_33.setTransform(-33.675,-8.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAXA2IAAhCIguBCIgLAAIAAhUIAMAAIAABBIAthBIAMAAIAABUgAgNgqQgFgEgBgHIAJAAQAAAEADACQADACAEgBQAFABADgCQADgCAAgEIAIAAQAAAHgFAEQgFAEgJAAQgJAAgEgEg");
	this.shape_34.setTransform(-42.425,-10);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_35.setTransform(-48.325,-8.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAcA1IAAgVIhCAAIAAhUIAMAAIAABJIAqAAIAAhJIAMAAIAABJIALAAIAAAgg");
	this.shape_36.setTransform(-53.85,-7.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_37.setTransform(-60.125,-8.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAsIAAgJQgMgBgJgEQgJgEgFgIQgFgIAAgKQAAgJAFgIQAFgHAJgFQAJgEAMgBIAAgJIALAAIAAAJQAMABAJAEQAJAFAFAHQAFAIAAAJQAAAKgFAIQgFAHgJAFQgJAEgMABIAAAJgAAGAZQANgBAHgHQAIgGAAgLQAAgJgIgHQgHgGgNgCgAgZgQQgIAHAAAJQAAALAIAGQAHAHANABIAAgxQgNACgHAGg");
	this.shape_38.setTransform(-66.525,-8.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgWAmQgKgFgGgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQAKgGAMAAQANAAAKAGQAKAGAGAJQAFAKAAAMQAAANgFAKQgGAKgKAFQgKAGgNAAQgMAAgKgGgAgPgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAEAHAIAEQAHAEAIAAQAJAAAIgEQAHgEAEgHQAEgIAAgJQAAgIgEgHQgEgIgHgEQgIgEgJAAQgIAAgHAEg");
	this.shape_39.setTransform(-76.325,-8.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-20.6,169.5,41.2);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBHIgOgoIgyAAIgOAoIgbAAIA0iNIAdAAIA0CNgAARAJIgRgxIgRAxIAiAAg");
	this.shape.setTransform(51.225,1.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBCQgNgHgHgNQgHgLAAgSIAAhYIAcAAIAABVQAAARAIAIQAIAHANAAQAOAAAIgHQAJgIAAgRIAAhVIAbAAIAABYQAAASgHALQgHANgNAHQgNAGgSAAQgRAAgNgGg");
	this.shape_1.setTransform(36.825,2.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgFAGAAQAHAAAEAFQAEAFABAFQgBAHgEAEQgEAEgHABQgGgBgEgEg");
	this.shape_2.setTransform(26.425,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnBHIgOgoIgyAAIgOAoIgbAAIA0iNIAdAAIA0CNgAARAJIgRgxIgRAxIAiAAg");
	this.shape_3.setTransform(16.375,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBHIAAh1IgmAAIAAgYIBlAAIAAAYIglAAIAAB1g");
	this.shape_4.setTransform(3.85,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBAQgRgJgJgRQgKgQAAgWQAAgVAKgQQAJgRARgJQARgJAUAAQAWAAAQAJQARAJAKARQAJAQAAAVQAAAWgJAQQgKARgRAIQgQAKgWAAQgUAAgRgJgAgXgoQgLAGgFAKQgGALAAANQAAAOAGALQAFAKALAHQAKAFANAAQAOAAAKgFQALgHAFgKQAHgLgBgOQABgNgHgLQgFgKgLgGQgKgHgOABQgNgBgKAHg");
	this.shape_5.setTransform(-10.05,1.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBHIAAg3IgwhWIAeAAIAgA9IAig9IAbAAIgxBWIAAA3g");
	this.shape_6.setTransform(-24.45,1.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBAQgRgJgKgRQgJgQgBgWQABgVAJgQQAKgRARgJQAQgJAVAAQAVAAASAJQAQAJAKARQAKAQAAAVQAAAWgKAQQgKARgQAIQgSAKgVAAQgVAAgQgJgAgXgoQgKAGgGAKQgGALAAANQAAAOAGALQAGAKAKAHQALAFAMAAQAOAAAKgFQAKgHAHgKQAFgLAAgOQAAgNgFgLQgHgKgKgGQgKgHgOABQgMgBgLAHg");
	this.shape_7.setTransform(-38.9,1.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBHIAAh1IgmAAIAAgYIBlAAIAAAYIglAAIAAB1g");
	this.shape_8.setTransform(-52.75,1.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-16.2,120.69999999999999,32.5);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgxBKIAAiTIAuAAQAVAAALAKQAMAKAAARQAAALgEAIQgFAIgLAHQANACAIAJQAIAJAAAPQAAANgFAIQgGAKgKAFQgKAGgPgBgAgcA4IAdAAQANAAAHgGQAIgHAAgMQAAgLgHgFQgHgHgMAAIgfAAgAgcgIIAYAAQAHAAAGgDQAGgDADgGQADgGAAgHQAAgKgHgGQgHgGgMAAIgXAAg");
	this.shape.setTransform(76.675,118.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AApBeIAAhzIhRBzIgVAAIAAiTIAVAAIAABzIBRhzIAVAAIAACTgAgYhKQgJgHAAgNIAOAAQABAHAFAEQAFADAIAAQAJAAAFgDQAFgEAAgHIAPAAQgBANgJAHQgJAHgPgBQgQABgIgHg");
	this.shape_1.setTransform(61.475,116.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AAtBKIgQgtIg6AAIgQAtIgWAAIA4iTIAWAAIA5CTgAAWALIgWg8IgWA8IAsAAg");
	this.shape_2.setTransform(46.175,118.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgvBKIAAiTIAuAAQAPgBALAHQAMAFAFALQAGAKAAAOQAAANgGALQgFAJgMAIQgLAGgPAAIgZAAIAAA2gAgaACIAVAAQAIAAAHgCQAHgEAFgGQAEgIAAgJQAAgKgEgHQgFgGgHgDQgHgCgIAAIgVAAg");
	this.shape_3.setTransform(33.425,118.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AA1BcIAAgkIhoAAIAAAkIgTAAIAAg3IAKAAQAEABAEgFQAEgEACgIQACgIACgJIAKhfIBUAAIAACAIATAAIAAA3gAgWAFQgBAMgDAJQgCAJgFACIA/AAIAAhtIgrAAg");
	this.shape_4.setTransform(18.85,119.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAJIAAgQIBHAAIAAAQg");
	this.shape_5.setTransform(6.875,119.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBKIAAiAIgoAAIAAgTIBlAAIAAATIgoAAIAACAg");
	this.shape_6.setTransform(-3.375,118.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AgbBDQgRgKgKgRQgKgSAAgWQAAgWALgRQAJgRASgKQARgJAWAAQAPAAAMADQANAFAJAHIgHAUQgIgIgLgDQgLgEgLAAQgQAAgNAHQgMAHgHANQgHAMgBAQQABAQAHAMQAHAOAMAHQANAHAQAAQANAAAMgEQALgFAIgGIAHATQgLAIgNAEQgNAFgQAAQgVgBgSgJg");
	this.shape_7.setTransform(-16.275,118.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBKIAAiTIBUAAIAAATIg/AAIAAAtIA9AAIAAASIg9AAIAAAuIBAAAIAAATg");
	this.shape_8.setTransform(-29.825,118.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBKIAAiAIgoAAIAAgTIBlAAIAAATIgoAAIAACAg");
	this.shape_9.setTransform(-41.775,118.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AAtBKIgQgtIg6AAIgQAtIgWAAIA4iTIAWAAIA5CTgAAWALIgWg8IgWA8IAsAAg");
	this.shape_10.setTransform(-59.625,118.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AAmBKIAAhBIhLAAIAABBIgWAAIAAiTIAWAAIAABAIBLAAIAAhAIAWAAIAACTg");
	this.shape_11.setTransform(-74.825,118.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AAhBKIAAg8IgZAAIgCAAIgjA8IgZAAIAphBQgNgFgGgKQgIgKABgOQgBgOAHgJQAFgKALgFQALgGAOABIAuAAIAACTgAgCg1QgIADgDAFQgFAGAAAKQAAAJAFAGQADAGAHADQAFADAHAAIAYAAIAAg1IgWAAQgIgBgFADg");
	this.shape_12.setTransform(70.1,94.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AgbBCQgRgJgKgSQgKgQAAgXQAAgWALgRQAJgRASgKQARgKAWABQAPAAAMADQANAFAJAHIgHATQgIgGgLgEQgLgEgLAAQgQAAgNAHQgMAHgHANQgHAMgBAQQABAQAHAMQAHANAMAIQANAHAQAAQANAAAMgEQALgFAIgGIAHATQgLAIgNAEQgNAEgQABQgVAAgSgLg");
	this.shape_13.setTransform(56.875,94.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBKIAAiTIBUAAIAAATIg/AAIAAAuIA9AAIAAARIg9AAIAAAuIBAAAIAAATg");
	this.shape_14.setTransform(43.325,94.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBKIAAiAIgoAAIAAgTIBlAAIAAATIgoAAIAACAg");
	this.shape_15.setTransform(31.375,94.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AApBeIAAhzIhRBzIgVAAIAAiTIAVAAIAABzIBRhzIAVAAIAACTgAgYhKQgJgHAAgNIAOAAQABAIAFACQAFAEAIAAQAJAAAFgEQAFgCAAgIIAPAAQgBANgJAHQgJAGgPAAQgQAAgIgGg");
	this.shape_16.setTransform(17.575,92.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBKIgLgDIAEgSIAIADIAKABQAJAAAGgEQAFgFAFgJIg6hxIAXAAIAsBbIAnhbIAXAAIgyBvQgEALgGAJQgFAJgHAEQgIAFgOABIgNgCg");
	this.shape_17.setTransform(2.9,94.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("AgbBCQgRgJgKgSQgKgQAAgXQAAgWALgRQAJgRASgKQARgKAWABQAPAAAMADQANAFAJAHIgHATQgIgGgLgEQgLgEgLAAQgQAAgNAHQgMAHgHANQgHAMgBAQQABAQAHAMQAHANAMAIQANAHAQAAQANAAAMgEQALgFAIgGIAHATQgLAIgNAEQgNAEgQABQgVAAgSgLg");
	this.shape_18.setTransform(-11.175,94.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AApBKIAAhzIhRBzIgVAAIAAiTIAVAAIAABzIBRhzIAVAAIAACTg");
	this.shape_19.setTransform(-27.025,94.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AAlBKIAAiAIhJAAIAACAIgWAAIAAiTIB1AAIAACTg");
	this.shape_20.setTransform(-43.075,94.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AAtBKIgQgtIg6AAIgQAtIgWAAIA4iTIAWAAIA5CTgAAWALIgWg9IgWA9IAsAAg");
	this.shape_21.setTransform(-58.075,94.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AggBHQgNgGgIgIIAKgRQAHAHALAFQAKAFAOABQAPgBAJgGQAJgHAAgNQABgNgMgGQgMgGgYAAIAAgRQAQAAAJgEQAKgEADgFQAEgGAAgGQAAgKgIgGQgHgFgMAAQgLAAgKAEQgJAEgHAGIgJgQQAIgHAMgFQAMgFAPAAQAWAAANAKQAMAKAAARQAAAOgIAJQgIAJgNADQARADAJAIQAJAJAAARQAAAMgGAKQgHAKgMAGQgMAGgRAAQgTgBgNgFg");
	this.shape_22.setTransform(-71.675,94.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,75.1,169.8,57.900000000000006);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMAAIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCAEgEACQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgCADgCQACgEAAgEIAAgFIgOABg");
	this.shape.setTransform(84.525,42.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BABABA").s().p("AgEAbQgDgDAAgGIAAgbIgGAAIAAgGIAGAAIAAgNIAGgBIAAAOIANAAIAAAGIgNAAIAAAaQAAAEABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIAEgBIAEgBIABAFIgEACIgGABQgFAAgDgDg");
	this.shape_1.setTransform(80.675,41.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgDgFAAgHQAAgGADgFQACgGAGgCQAFgDAGAAQAHAAAGADQAEACADAGQAEAFAAAGQAAAHgEAFQgDAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEADAEgBQAFABAEgDQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_2.setTransform(76.2,42.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BABABA").s().p("AgRAgIgDgBIABgFIACAAIACAAQADAAADgCQACgCADgFIACgGIgTgqIAHAAIAPAiIAOgiIAGAAIgUAyQgCAHgEADQgEADgGAAIgCAAg");
	this.shape_3.setTransform(71.3,43.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BABABA").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgFQAEgGAFgCQAFgDAGAAQAHAAAGADQAEACAEAGQADAFAAAGQAAAHgDAFQgEAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_4.setTransform(66.4,42.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BABABA").s().p("AgCAgIAAg5IgSAAIAAgGIApAAIAAAGIgRAAIAAA5g");
	this.shape_5.setTransform(61.35,41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BABABA").s().p("AAPAXIgPgTIgNATIgHAAIASgXIgRgVIAIAAIALARIAOgRIAGAAIgQAVIARAXg");
	this.shape_6.setTransform(54.5,42.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMAAIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCAEgEACQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgCADgCQACgEAAgEIAAgFIgOABg");
	this.shape_7.setTransform(49.575,42.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgFAFgDQAFgCAEAAQAGAAAFADQAFACADAGQADAFAAAHQAAAHgDAEQgDAFgFADQgFAEgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_8.setTransform(44.525,43.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_9.setTransform(39.425,42.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_10.setTransform(34.725,42.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAFAAQAHAAAEADQAFACADAGQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAEAHAAQAFABAEgCQAFgCACgDIACAGIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgHIgFgGQgEgBgEAAIgGABIgFAGIgDAHIAdAAIAAAAg");
	this.shape_11.setTransform(29.475,42.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BABABA").s().p("AARAdIAAgNIgnAAIAAgsIAGAAIAAAnIAZAAIAAgnIAHAAIAAAnIAHAAIAAASg");
	this.shape_12.setTransform(24.475,43.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BABABA").s().p("AAOAXIgOgTIgNATIgIAAIASgXIgRgVIAIAAIANARIAMgRIAHAAIgQAVIARAXg");
	this.shape_13.setTransform(16.85,42.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BABABA").s().p("AAPAXIAAgkIgdAkIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsg");
	this.shape_14.setTransform(11.75,42.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BABABA").s().p("AAKAXIgTgWIgCAAIAAAWIgGAAIAAgsIAGAAIAAATIACAAIASgTIAIAAIgUAUIAVAYg");
	this.shape_15.setTransform(7.1,42.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BABABA").s().p("AgQAXIAAgsIAGAAIAAATIALAAQAIAAAEACQAEACAAAHQAAAFgCACQgCADgDACQgEACgEAAgAgKARIALAAQAFABADgDQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_16.setTransform(2.375,42.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BABABA").s().p("AgIAUQgFgDgDgEQgCgGAAgHQAAgGACgFQADgGAGgCQAFgDAFAAQAFAAAEABIAHADIgCAGIgHgEIgHgBQgDAAgEACQgEADgCADQgCAEAAAFQAAAFACAEQACAEADADQAEABAEAAIAIgBQAEgBADgCIABAFQgCADgFABQgEABgGABQgFAAgFgEg");
	this.shape_17.setTransform(-2.4,42.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgFAFgDQAFgCAEAAQAGAAAFADQAFACADAGQADAFAAAHQAAAHgDAEQgDAFgFADQgFAEgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_18.setTransform(-7.375,43.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAFAAQAHAAAEADQAFACADAGQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAEAHAAQAFABAEgCQAFgCACgDIACAGIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgHIgFgGQgEgBgEAAIgGABIgFAGIgDAHIAdAAIAAAAg");
	this.shape_19.setTransform(-12.975,42.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BABABA").s().p("AgTAXIgDgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgGAAIAAgmIgSAAIgEAbQAAAGgDADQgDADgFAAIgDAAg");
	this.shape_20.setTransform(-18.6,42.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BABABA").s().p("AAOAXIAAgkIgcAkIgGAAIAAgsIAGAAIAAAjIAcgjIAHAAIAAAsg");
	this.shape_21.setTransform(-23.75,42.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgSIADAAQADAAACgDQACgDAAgGIAEgbIAcAAIAAAnIAHAAIAAASgAgHAAIgBAGIgDAFIAWAAIAAghIgQAAg");
	this.shape_22.setTransform(-29.3,43.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BABABA").s().p("AAOAXIgOgTIgNATIgIAAIASgXIgRgVIAIAAIANARIAMgRIAIAAIgRAVIASAXg");
	this.shape_23.setTransform(-36.45,42.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BABABA").s().p("AAOAXIAAgkIgcAkIgFAAIAAgsIAFAAIAAAjIAcgjIAGAAIAAAsg");
	this.shape_24.setTransform(-41.55,42.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_25.setTransform(-47.125,42.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BABABA").s().p("AAPAhIAAgkIgdAkIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsgAgJgXQgEgDAAgGIAFAAQABAEACACQACACADAAQAEAAACgCQACgCABgEIAEAAQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_26.setTransform(-52.7,41.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_27.setTransform(-56.625,41.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BABABA").s().p("AARAdIAAgNIgnAAIAAgsIAGAAIAAAnIAZAAIAAgnIAHAAIAAAnIAHAAIAAASg");
	this.shape_28.setTransform(-60.175,43.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_29.setTransform(-64.325,41.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BABABA").s().p("AgCArIAAgcQgDAGgEACQgEACgFAAQgGAAgFgDQgEgDgDgFQgCgFAAgHQAAgGACgFQADgGAEgDQAFgDAGAAQAFAAAEACQAEADADAFIAAgfIAFAAIAAAfQADgFAEgDQAEgCAFAAQAGAAAFADQAEADADAFQACAGAAAGQAAAHgCAFQgDAFgEADQgFADgGAAQgFAAgEgCQgEgCgDgGIAAAcgAAKgMQgDACgCAEQgCAEAAAEQAAAFACAEQACADADADQAEACAEAAQAFAAADgCQADgCACgEQACgEAAgFQAAgFgCgDQgCgEgDgDQgDgCgFAAQgEAAgEADgAgZgNQgDADgCAEQgCAEAAAEQAAAFACAEQACAEADACQAEACAEAAQAFAAADgCQADgDACgDQACgEAAgFQAAgEgCgEQgCgEgDgCQgDgDgFAAQgFAAgDACg");
	this.shape_30.setTransform(-69.775,42.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgDgFAAgHQAAgGADgFQAEgGAEgCQAGgDAGAAQAHAAAFADQAFACAEAGQACAFAAAGQAAAHgCAFQgEAFgFADQgFAEgHAAQgGAAgGgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQADgEAAgFQAAgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_31.setTransform(-76.85,42.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAFQAAADgCADQgCACgDABQAFABADACQADADAAAEQAAAFgDADQgCADgDABQgEACgFAAgAgLARIAMAAQAFAAADgBQACgCAAgFQAAgDgDgCQgDgDgFAAIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgBgEgBIgKAAg");
	this.shape_32.setTransform(-84.025,42.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_33.setTransform(129.325,32.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BABABA").s().p("AgIAUQgFgDgCgFQgEgFAAgHQAAgGAEgGQACgEAFgEQAGgDAGAAQAEABAEABIAHADIgDAGIgFgDIgHgBQgEAAgEABQgEACgCAFQgCAEAAAEQAAAFACAEQACAEAEACQADADAEAAIAIgCQADgBADgDIADAGQgDACgFACQgEABgFAAQgGAAgFgDg");
	this.shape_34.setTransform(125,32.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgGAFgDQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCQAFgCACgDIACAGIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_35.setTransform(120.125,32.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_36.setTransform(115.525,32.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BABABA").s().p("AAOAhIAAgkIgbAkIgHAAIAAgsIAHAAIAAAjIAbgjIAHAAIAAAsgAgJgXQgDgDgBgGIAGAAQAAAEACACQACACADAAQAEAAACgCQACgCAAgEIAFAAQAAAGgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_37.setTransform(110.7,31.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_38.setTransform(105.175,32.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEADAAAEQAAAEgCADQgCACgDACQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEACgFgBgAgLASIAMAAQAFAAADgDQACgCAAgDQAAgFgDgCQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_39.setTransform(100.575,32.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_40.setTransform(95.325,32.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_41.setTransform(90.175,32.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BABABA").s().p("AgLAWIgHgDIACgHIAHAEIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIgFgCIgLgBIAAgFQAIAAAEgCQAEgCAAgDQAAgDgDgCQgCgCgFAAIgHABIgGADIgCgFIAHgEIAIgBQAIAAAEADQAEADABAGQAAAEgDADQgDADgGABIAHABQADABACACQACADAAAEQAAADgDAEQgCADgEABQgFABgFAAQgGAAgFgBg");
	this.shape_42.setTransform(85.075,32.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_43.setTransform(81.825,31.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDABgFIADgcIAcAAIAAAmIAHAAIAAATgAgHAAIgCAHIgCADIAWAAIAAghIgPAAg");
	this.shape_44.setTransform(78,33.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BABABA").s().p("AgCAUQgFgCgDgFQgDgFgBgGIgMAAIAAAUIgGAAIAAgsIAGAAIAAAUIAMAAQABgGADgFQADgFAFgCQAEgCAHgBQAHAAAFADQAGAEADAEQADAGAAAGQAAAHgDAFQgDAGgGACQgFADgHAAQgHAAgEgDgAAAgPIgFAHQgCAEAAAEQAAAFACAEQACAEADACQAEADAFAAQAFAAAEgDQAEgCACgEQACgEAAgFQAAgEgCgEQgCgEgEgDQgEgBgFAAQgFAAgEABg");
	this.shape_45.setTransform(69.475,32.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_46.setTransform(64.325,31.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BABABA").s().p("AARAdIAAgNIgnAAIAAgsIAGAAIAAAmIAZAAIAAgmIAHAAIAAAmIAHAAIAAATg");
	this.shape_47.setTransform(60.775,33.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_48.setTransform(55.025,32.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_49.setTransform(49.325,32.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BABABA").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgCAEgBQAGAAAFADQAFAEADAEQADAGAAAHQAAAHgDAEQgDAGgFACQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEAAQAFAAAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_50.setTransform(43.375,33.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BABABA").s().p("AgMAUQgEgCgEgGQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAGAAQAHAAAFADQAFAEADAEQADAGAAAGQAAAHgDAFQgDAGgFACQgFADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEAAgFQAAgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_51.setTransform(37.55,32.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BABABA").s().p("AgCArIAAgcQgDAGgEACQgEACgFAAQgGAAgFgDQgEgDgDgFQgCgFAAgHQAAgGACgFQADgGAEgDQAFgDAGAAQAFAAAEACQAEADADAFIAAgfIAFAAIAAAfQADgFAEgDQAEgCAFAAQAGAAAFADQAEADADAFQACAGAAAGQAAAHgCAFQgDAFgEADQgFADgGAAQgFAAgEgCQgEgCgDgGIAAAcgAAKgMQgDACgCAEQgCAEAAAEQAAAFACAEQACADADADQAEACAEAAQAFAAADgCQADgCACgEQACgEAAgFQAAgFgCgDQgCgEgDgDQgDgCgFAAQgEAAgEADgAgZgNQgDADgCAEQgCAEAAAEQAAAFACAEQACAEADACQAEACAEAAQAFAAADgCQADgDACgDQACgEAAgFQAAgEgCgEQgCgEgDgCQgDgDgFAAQgFAAgDACg");
	this.shape_52.setTransform(30.475,32.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_53.setTransform(23.425,32.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_54.setTransform(19.625,31.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BABABA").s().p("AgRAgIgCgBIAAgFIABAAIACAAQAEAAADgCQADgCACgFIADgGIgTgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgGAAIgCAAg");
	this.shape_55.setTransform(14.1,33.575);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BABABA").s().p("AgeAWIAAgsIAGAAIAAAnIAWAAIAAgnIAFAAIAAAnIAWAAIAAgnIAGAAIAAAsg");
	this.shape_56.setTransform(8.025,32.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_57.setTransform(3.025,31.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_58.setTransform(-0.825,32.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BABABA").s().p("AgQAWIAAgsIAGAAIAAATIALAAQAIAAAEADQAEADAAAGQAAAFgCADQgCACgDACQgEACgEgBgAgKASIALAAQAFAAADgDQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_59.setTransform(-5.675,32.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BABABA").s().p("AgUAXIgCgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgHAAIAAgmIgSAAIgCAbQgCAGgCADQgDADgEAAIgFAAg");
	this.shape_60.setTransform(-11.25,32.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_61.setTransform(-16.225,32.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_62.setTransform(-20.675,32.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgGAFgDQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCIAHgFIACAGIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_63.setTransform(-25.175,32.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BABABA").s().p("AAWAoIAAgQIgsAAIAAAQIgFAAIAAgVIADAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQACgCACgDIABgIIAFgqIAgAAIAAA6IAIAAIAAAVgAgJAEIgDAKQgBADgCACIAdAAIAAgzIgTAAg");
	this.shape_64.setTransform(-30.85,32.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BABABA").s().p("AgDADIgBgDIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_65.setTransform(-37.225,34.475);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAAEgXQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABADIgBAEIgEABIgDgBgAgKgXIgBgEIABgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_66.setTransform(-39.6,31.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_67.setTransform(-41.775,31.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BABABA").s().p("AARAdIAAgNIgnAAIAAgsIAGAAIAAAmIAZAAIAAgmIAHAAIAAAmIAHAAIAAATg");
	this.shape_68.setTransform(-45.325,33.25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_69.setTransform(-51.075,32.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_70.setTransform(-55.525,32.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BABABA").s().p("AAKAWIgTgUIgCAAIAAAUIgGAAIAAgsIAGAAIAAATIADAAIARgTIAIAAIgVAWIAWAWg");
	this.shape_71.setTransform(-59.3,32.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgGAFgDQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCQAFgCACgDIACAGIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_72.setTransform(-64.425,32.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BABABA").s().p("AgTAXIgDgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgHAAIAAgmIgRAAIgDAbQgCAGgCADQgDADgFAAIgDAAg");
	this.shape_73.setTransform(-70.05,32.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BABABA").s().p("AANAWIAAgmIgZAAIAAAmIgGAAIAAgsIAlAAIAAAsg");
	this.shape_74.setTransform(-75.025,32.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_75.setTransform(-81.025,32.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BABABA").s().p("AgMAUQgEgCgEgGQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAGAAQAHAAAFADQAFAEADAEQADAGAAAGQAAAHgDAFQgDAGgFACQgFADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEAAgFQAAgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_76.setTransform(-87.1,32.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BABABA").s().p("AAKAWIgTgUIgCAAIAAAUIgGAAIAAgsIAGAAIAAATIACAAIASgTIAIAAIgUAWIAVAWg");
	this.shape_77.setTransform(-91.65,32.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BABABA").s().p("AgMAUQgEgCgEgGQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAGAAQAHAAAFADQAFAEADAEQADAGAAAGQAAAHgDAFQgDAGgFACQgFADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEAAgFQAAgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_78.setTransform(-99.25,32.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BABABA").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_79.setTransform(-103.525,32.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BABABA").s().p("AgLAUQgGgCgCgGQgDgFgBgHQABgGADgGQACgEAGgEQAFgDAGAAQAHAAAFADQAGAEACAEQAEAGAAAGQAAAHgEAFQgCAGgGACQgFADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEAAgFQAAgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_80.setTransform(-108.4,32.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BABABA").s().p("AAOAhIAAgkIgcAkIgFAAIAAgsIAFAAIAAAjIAcgjIAGAAIAAAsgAgJgXQgEgDAAgGIAGAAQgBAEADACQACACADAAQAEAAACgCQACgCABgEIAEAAQAAAGgDADQgEAEgGAAQgGAAgDgEg");
	this.shape_81.setTransform(-114,31.575);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDABgFIADgcIAcAAIAAAmIAHAAIAAATgAgHAAIgCAHIgCADIAWAAIAAghIgPAAg");
	this.shape_82.setTransform(-121.8,33.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_83.setTransform(-125.475,31.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEADAAAEQAAAEgCADQgCACgDACQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEACgFgBgAgLASIAMAAQAFAAADgDQACgCAAgDQAAgFgDgCQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_84.setTransform(-128.775,32.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_85.setTransform(132.225,21.775);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_86.setTransform(129.075,22.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#BABABA").s().p("AgIAVQgFgEgCgEQgDgGAAgHQAAgGADgFQACgFAGgEQAFgCAFAAQAFAAAEABIAHADIgCAGIgGgEIgIgBQgDAAgEADQgEACgCADQgCAFAAAEQAAAFACAEQACAEADACQAEACAEAAIAIgBQADgBAEgCIACAFQgDACgFACQgEABgGABQgFAAgFgDg");
	this.shape_87.setTransform(124.85,22.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BABABA").s().p("AgLAVQgGgDgCgGQgDgFgBgHQABgGADgFQACgFAGgEQAFgCAGAAQAHAAAFACQAGAEACAFQAEAFAAAGQAAAHgEAFQgCAGgGADQgFADgHAAQgGAAgFgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQACAEAEACQAEADAEgBQAFABAEgDQAEgCACgEQACgEABgFQgBgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_88.setTransform(119.75,22.75);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BABABA").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_89.setTransform(114.275,22.75);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BABABA").s().p("AAZAXIgUgWIgCAAIAAAWIgFAAIAAgWIgCAAIgUAWIgIAAIAXgYIgWgUIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAUIAWAYg");
	this.shape_90.setTransform(108.225,22.75);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAFQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFABAEgCQAFgCACgCIACAFIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgHIgFgGQgEgBgEAAIgGABIgFAGIgDAHIAdAAIAAAAg");
	this.shape_91.setTransform(102.375,22.75);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BABABA").s().p("AgUAXIgCgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgHAAIAAgmIgSAAIgCAbQgCAGgCADQgDADgEAAIgFAAg");
	this.shape_92.setTransform(96.75,22.775);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOABg");
	this.shape_93.setTransform(91.775,22.75);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BABABA").s().p("AgLAWIgHgEIACgFIAHADIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgCQAEgCAAgEQAAgDgDgDQgCgBgFAAIgHABIgGADIgCgGIAHgCIAIgBQAIAAAEACQAEADABAGQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDACQgCADgEACQgFABgFABQgGgBgFgBg");
	this.shape_94.setTransform(86.975,22.75);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAFQAAADgCADQgCACgDABQAFABADACQADACAAAFQAAAFgDADQgCADgDABQgEABgFABgAgLARIAMAAQAFAAADgCQACgBAAgFQAAgDgDgCQgDgCgFgBIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgCgEAAIgKAAg");
	this.shape_95.setTransform(80.375,22.75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_96.setTransform(74.475,21.775);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#BABABA").s().p("AgUAXIgCgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgHAAIAAgmIgSAAIgCAbQgCAGgCADQgDADgEAAIgFAAg");
	this.shape_97.setTransform(70.3,22.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOABg");
	this.shape_98.setTransform(65.325,22.75);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_99.setTransform(61.825,21.775);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgFAFgDQAFgCAEAAQAGAAAFACQAFAEADAFQADAFAAAHQAAAGgDAFQgDAGgFADQgFADgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgXQgDACgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_100.setTransform(58.075,23.65);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAFQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFABAEgCIAHgEIACAFIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgHIgFgGQgEgBgEAAIgGABIgFAGIgDAHIAdAAIAAAAg");
	this.shape_101.setTransform(52.475,22.75);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_102.setTransform(47.875,22.75);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOABg");
	this.shape_103.setTransform(43.225,22.75);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#BABABA").s().p("AATAXIAAgjIgRAcIgEAAIgQgcIAAAjIgGAAIAAgsIAHAAIARAeIASgeIAHAAIAAAsg");
	this.shape_104.setTransform(37.525,22.75);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BABABA").s().p("AgRAgIgDgBIABgFIACAAIACAAQADAAADgCQACgCADgFIACgGIgTgqIAIAAIAOAiIAOgiIAHAAIgVAyQgCAHgEADQgEADgFAAIgDAAg");
	this.shape_105.setTransform(29.8,23.725);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#BABABA").s().p("AATAXIAAgjIgRAcIgEAAIgQgcIAAAjIgGAAIAAgsIAHAAIARAeIASgeIAHAAIAAAsg");
	this.shape_106.setTransform(24.375,22.75);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#BABABA").s().p("AgMAVQgEgDgDgGQgEgFAAgHQAAgGAEgFQADgFAEgEQAGgCAGAAQAHAAAFACQAGAEACAFQADAFAAAGQAAAHgDAFQgCAGgGADQgFADgHAAQgGAAgGgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQACgEABgFQgBgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_107.setTransform(18.3,22.75);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#BABABA").s().p("AgQAXIAAgsIAGAAIAAATIALAAQAIAAAEACQAEACAAAHQAAAEgCADQgCADgDACQgEABgEABgAgKARIALAAQAFABADgDQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_108.setTransform(13.425,22.75);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BABABA").s().p("AARAdIAAgNIgnAAIAAgsIAGAAIAAAnIAZAAIAAgnIAHAAIAAAnIAHAAIAAASg");
	this.shape_109.setTransform(8.475,23.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAFQAAADgCADQgCACgDABQAFABADACQADACAAAFQAAAFgDADQgCADgDABQgEABgFABgAgLARIAMAAQAFAAADgCQACgBAAgFQAAgDgDgCQgDgCgFgBIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgCgEAAIgKAAg");
	this.shape_110.setTransform(0.975,22.75);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#BABABA").s().p("AgLAVQgGgDgCgGQgDgFAAgHQAAgGADgFQACgFAGgEQAFgCAGAAQAHAAAGACQAEAEADAFQAEAFAAAGQAAAHgEAFQgDAGgEADQgGADgHAAQgGAAgFgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQACAEAEACQAEADAEgBQAFABAEgDQAEgCACgEQADgEgBgFQABgEgDgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_111.setTransform(-6.6,22.75);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#BABABA").s().p("AgMAXIAAgsIAZAAIAAAFIgTAAIAAAng");
	this.shape_112.setTransform(-10.875,22.75);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BABABA").s().p("AgMAVQgFgDgDgGQgCgFAAgHQAAgGACgFQADgFAFgEQAGgCAGAAQAHAAAGACQAFAEADAFQACAFAAAGQAAAHgCAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQACgEAAgFQAAgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_113.setTransform(-15.75,22.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#BABABA").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_114.setTransform(-21.225,22.75);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAFQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFABAEgCQAFgCACgCIACAFIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgHIgFgGQgEgBgEAAIgGABIgFAGIgDAHIAdAAIAAAAg");
	this.shape_115.setTransform(-26.475,22.75);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#BABABA").s().p("AAZAXIgUgWIgCAAIAAAWIgFAAIAAgWIgCAAIgUAWIgIAAIAXgYIgWgUIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAUIAWAYg");
	this.shape_116.setTransform(-32.375,22.75);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOABg");
	this.shape_117.setTransform(-38.375,22.75);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgFAFgDQAFgCAEAAQAGAAAFACQAFAEADAFQADAFAAAHQAAAGgDAFQgDAGgFADQgFADgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgXQgDACgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_118.setTransform(-43.425,23.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BABABA").s().p("AgHAhQgFgBgDgEQgDgEgDgHIgCgRQABgJACgHQACgHAGgEQAFgDAIgCIADAAIADgBIAFAAIAEAAIADgBIABAGIgHABIgFAAIgDAAIgCABIgKADQgEACgCAFQgDAFAAAJQADgEAFgCQAFgDAFAAQAGAAAFADQAFADACAFQADAEAAAHQAAAHgDAFQgCAGgGADQgFADgGAAQgEAAgEgCgAgGgEIgGAEIgEAFQAAAJADAFQACAGAEACQAEACAEAAQAFAAAEgCQADgDACgEQACgEAAgFQAAgFgCgEQgCgDgDgCQgEgCgFAAQgDAAgEABg");
	this.shape_119.setTransform(-49.2,21.625);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BABABA").s().p("AgLAVQgGgDgCgGQgDgFAAgHQAAgGADgFQACgFAGgEQAFgCAGAAQAHAAAGACQAEAEADAFQAEAFAAAGQAAAHgEAFQgDAGgEADQgGADgHAAQgGAAgFgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQACAEAEACQAEADAEgBQAFABAEgDQAEgCACgEQADgEgBgFQABgEgDgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_120.setTransform(-54.75,22.75);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BABABA").s().p("AgLAWIgHgEIACgFIAHADIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgCQAEgCAAgEQAAgDgDgDQgCgBgFAAIgHABIgGADIgCgGIAHgCIAIgBQAIAAAEACQAEADABAGQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDACQgCADgEACQgFABgFABQgGgBgFgBg");
	this.shape_121.setTransform(-59.875,22.75);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgSIADAAQADAAACgDQACgDAAgGIAEgbIAcAAIAAAnIAHAAIAAASgAgHAAIgCAGIgCAFIAWAAIAAghIgQAAg");
	this.shape_122.setTransform(-67,23.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_123.setTransform(-70.675,21.775);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAFQAAADgCADQgCACgDABQAFABADACQADACAAAFQAAAFgDADQgCADgDABQgEABgFABgAgLARIAMAAQAFAAADgCQACgBAAgFQAAgDgDgCQgDgCgFgBIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgCgEAAIgKAAg");
	this.shape_124.setTransform(-73.975,22.75);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_125.setTransform(-81.425,22.725);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#BABABA").s().p("AgIAVQgFgEgCgEQgDgGAAgHQAAgGADgFQACgFAGgEQAFgCAFAAQAFAAAEABIAHADIgCAGIgGgEIgIgBQgDAAgEADQgEACgCADQgCAFAAAEQAAAFACAEQACAEADACQAEACAEAAIAIgBQADgBAEgCIACAFQgDACgFACQgEABgGABQgFAAgFgDg");
	this.shape_126.setTransform(-85.75,22.75);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BABABA").s().p("AAPAXIAAgkIgdAkIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsg");
	this.shape_127.setTransform(-90.95,22.75);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_128.setTransform(-95.825,22.75);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_129.setTransform(-100.425,22.725);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#BABABA").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_130.setTransform(-105.225,22.75);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#BABABA").s().p("AgLAWIgHgEIACgFIAHADIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgCQAEgCAAgEQAAgDgDgDQgCgBgFAAIgHABIgGADIgCgGIAHgCIAIgBQAIAAAEACQAEADABAGQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDACQgCADgEACQgFABgFABQgGgBgFgBg");
	this.shape_131.setTransform(-110.325,22.75);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_132.setTransform(-113.575,21.775);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgFAFgDQAFgCAEAAQAGAAAFACQAFAEADAFQADAFAAAHQAAAGgDAFQgDAGgFADQgFADgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgXQgDACgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_133.setTransform(-117.325,23.65);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgSIADAAQADAAACgDQACgDAAgGIAEgbIAcAAIAAAnIAHAAIAAASgAgHAAIgBAGIgDAFIAWAAIAAghIgQAAg");
	this.shape_134.setTransform(-123.1,23.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_135.setTransform(-126.775,21.775);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAFQAAADgCADQgCACgDABQAFABADACQADACAAAFQAAAFgDADQgCADgDABQgEABgFABgAgLARIAMAAQAFAAADgCQACgBAAgFQAAgDgDgCQgDgCgFgBIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgCgEAAIgKAAg");
	this.shape_136.setTransform(-130.075,22.75);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgFAFgDQAFgEAFAAQAHAAAEAEQAFADADAEQADAFAAAHIAAABIgkAAQAAAHAEAFQAFAEAHABQAFgBAEgBQAFgCACgDIACAGIgIAEQgEACgGAAQgHAAgFgDgAAPgEIgCgGIgFgGQgEgBgEAAIgGABIgFAGIgDAGIAdAAIAAAAg");
	this.shape_137.setTransform(115.275,12.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#BABABA").s().p("AAZAWIgUgUIgCAAIAAAUIgFAAIAAgUIgCAAIgUAUIgIAAIAXgWIgWgWIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAWIAWAWg");
	this.shape_138.setTransform(109.375,12.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BABABA").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgGQAEgEAFgDQAFgEAGAAQAHAAAGAEQAEADAEAEQADAGAAAGQAAAHgDAFQgEAFgEADQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_139.setTransform(103.3,12.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_140.setTransform(97.275,12.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BABABA").s().p("AAOAWIgOgTIgNATIgIAAIASgWIgQgWIAHAAIANARIAMgRIAHAAIgQAWIARAWg");
	this.shape_141.setTransform(89.4,12.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BABABA").s().p("AAPAWIAAgjIgcAjIgGAAIAAgsIAGAAIAAAjIAcgjIAFAAIAAAsg");
	this.shape_142.setTransform(84.3,12.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEACAAAGQAAAEgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEABgFAAgAgLASIAMAAQAFAAADgCQACgDAAgDQAAgEgDgDQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgDIABgDQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_143.setTransform(79.275,12.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgDgFAAgHQAAgGADgGQACgEAGgDQAFgEAGAAQAHAAAGAEQAEADADAEQAEAGAAAGQAAAHgEAFQgDAFgEADQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_144.setTransform(73.95,12.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDAAgFIAEgcIAcAAIAAAmIAHAAIAAATgAgHAAIgBAHIgDADIAXAAIAAghIgRAAg");
	this.shape_145.setTransform(68.5,13.55);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgDAEgBQAFgBAEgBQAJABAFAEQAEAFAAAIIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHAAgEgDgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_146.setTransform(63.225,12.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#BABABA").s().p("AgTAXIgDgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgHAAIAAgmIgRAAIgDAbQgCAGgCADQgDADgFAAIgDAAg");
	this.shape_147.setTransform(57.75,12.925);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#BABABA").s().p("AAKAWIgTgUIgCAAIAAAUIgGAAIAAgsIAGAAIAAATIADAAIARgTIAIAAIgVAWIAWAWg");
	this.shape_148.setTransform(53.65,12.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#BABABA").s().p("AgIAUQgFgCgCgGQgDgFAAgHQAAgGADgGQACgEAGgDQAFgEAFAAQAFABAEABIAHADIgCAGIgGgEIgIAAQgDAAgEABQgEACgCAFQgCAEAAAEQAAAFACAEQACAEADADQAEACAEAAIAIgCQADgBAEgDIACAGQgDADgFABQgEABgGAAQgFAAgFgDg");
	this.shape_149.setTransform(48.8,12.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgDgFgBgHQABgGADgGQACgEAGgDQAFgEAGAAQAHAAAFAEQAGADACAEQAEAGAAAGQAAAHgEAFQgCAFgGADQgFADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEABgFQgBgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_150.setTransform(41.45,12.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#BABABA").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_151.setTransform(37.175,12.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgCgFAAgHQAAgGACgGQAEgEAEgDQAGgEAGAAQAHAAAGAEQAEADAEAEQACAGAAAGQAAAHgCAFQgEAFgEADQgGADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEAAgFQAAgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_152.setTransform(32.3,12.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BABABA").s().p("AAPAhIAAgkIgcAkIgGAAIAAgsIAGAAIAAAjIAcgjIAFAAIAAAsgAgJgXQgEgDABgGIAEAAQABAEACACQACACADAAQAEAAACgCQADgCgBgEIAGAAQgBAGgEADQgDAEgGAAQgGAAgDgEg");
	this.shape_153.setTransform(26.7,11.875);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgDAEgBQAFgBAEgBQAJABAFAEQAEAFAAAIIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHAAgEgDgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_154.setTransform(18.925,12.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_155.setTransform(14.475,12.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_156.setTransform(7.625,12.875);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#BABABA").s().p("AgUAXIgCgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgHAAIAAgmIgSAAIgCAbQgBAGgDADQgDADgFAAIgEAAg");
	this.shape_157.setTransform(2.5,12.925);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_158.setTransform(-0.875,11.925);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#BABABA").s().p("AgIAhQgEgBgDgEQgDgEgCgHIgCgRQAAgJACgHQADgHAFgEQAFgDAIgCIAEAAIACgBIAFAAIAEAAIADgBIABAGIgGABIgGAAIgCAAIgDABIgKADQgEACgCAFQgCAFgBAJQADgEAFgCQAFgDAFAAQAGAAAFADQAFADADAFQADAEAAAHQAAAHgDAFQgDAGgFADQgGADgHAAQgDAAgFgCgAgFgEIgGAEIgFAFQABAJACAFQACAGAEACQAEACADAAQAGAAADgCQAEgDACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgDgCgFAAQgDAAgDABg");
	this.shape_159.setTransform(-4.7,11.775);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgDgFAAgHQAAgGADgGQAEgEAEgDQAGgEAGAAQAHAAAFAEQAFADAEAEQACAGAAAGQAAAHgCAFQgEAFgFADQgFADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQADgEAAgFQAAgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_160.setTransform(-10.25,12.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_161.setTransform(-16.275,12.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgDgFAAgHQAAgGADgGQACgEAGgDQAFgEAGAAQAHAAAGAEQAEADADAEQAEAGAAAGQAAAHgEAFQgDAFgEADQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_162.setTransform(-22.35,12.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_163.setTransform(-27.125,12.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEACAAAGQAAAEgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEABgFAAgAgLASIAMAAQAFAAADgCQACgDAAgDQAAgEgDgDQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgDIABgDQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_164.setTransform(-31.275,12.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgDAEgBQAFgBAEgBQAJABAFAEQAEAFAAAIIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHAAgEgDgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_165.setTransform(-36.525,12.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDAAgFIAEgcIAcAAIAAAmIAHAAIAAATgAgHAAIgBAHIgDADIAWAAIAAghIgQAAg");
	this.shape_166.setTransform(-43.9,13.55);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_167.setTransform(-49.125,12.875);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#BABABA").s().p("AgUAXIgCgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgGAAIAAgmIgTAAIgDAbQgBAGgCADQgDADgEAAIgFAAg");
	this.shape_168.setTransform(-54.25,12.925);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#BABABA").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_169.setTransform(-58.075,12.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#BABABA").s().p("AAPAWIAAgjIgdAjIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsg");
	this.shape_170.setTransform(-63.05,12.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEACAAAGQAAAEgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEABgFAAgAgLASIAMAAQAFAAADgCQACgDAAgDQAAgEgDgDQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgDIABgDQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_171.setTransform(-68.075,12.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#BABABA").s().p("AAOAhIAAgkIgcAkIgFAAIAAgsIAFAAIAAAjIAcgjIAGAAIAAAsgAgJgXQgEgDAAgGIAGAAQgBAEADACQACACADAAQAEAAACgCQACgCABgEIAEAAQAAAGgDADQgEAEgGAAQgGAAgDgEg");
	this.shape_172.setTransform(-75.75,11.875);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_173.setTransform(-79.675,11.925);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_174.setTransform(-83.525,12.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#BABABA").s().p("AgeAWIAAgsIAGAAIAAAnIAWAAIAAgnIAFAAIAAAnIAWAAIAAgnIAGAAIAAAsg");
	this.shape_175.setTransform(-90.175,12.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_176.setTransform(-95.175,11.925);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_177.setTransform(-99.025,12.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEACAAAGQAAAEgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEABgFAAgAgLASIAMAAQAFAAADgCQACgDAAgDQAAgEgDgDQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgDIABgDQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_178.setTransform(-103.925,12.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgDgFAAgHQAAgGADgGQAEgEAEgDQAGgEAGAAQAHAAAFAEQAFADAEAEQACAGAAAGQAAAHgCAFQgEAFgFADQgFADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQADgEAAgFQAAgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_179.setTransform(-109.25,12.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#BABABA").s().p("AgMAfQgGgDgDgEIADgGIAEAFIAHACQADACAEAAQAHAAAEgDQAFgEAAgGQAAgGgGgDQgFgDgLgBIAAgEQAIgBAEgBQAEgCABgDQACgDABgDQgBgFgEgCQgDgDgGAAIgJACIgHAEIgCgFQADgDAFgBQAFgCAFgBQAGAAAEACQAFACACADQADAEAAAFQAAAGgEAEQgDAEgGABQAHABAEADQAFAEAAAHQAAAGgDAEQgDAEgFADQgFACgHAAQgHAAgFgCg");
	this.shape_180.setTransform(-114.7,11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,2.7,280.6,46.4);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFAAQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgDAAgFIAAgFIgOACg");
	this.shape.setTransform(145.375,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BABABA").s().p("AgOATQgEgFgBgKIAAgaIAHAAIAAAZQAAAHADADQADAFAGAAIAGgCQAEgCACgEQABgDAAgFIAAgYIAHAAIAAAsIgHAAIAAgJQgCAFgEACQgEADgFAAQgIAAgEgEg");
	this.shape_1.setTransform(140.175,32.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BABABA").s().p("AgDADIgBgDIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_2.setTransform(136.275,34.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFAAQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgDAAgFIAAgFIgOACg");
	this.shape_3.setTransform(132.325,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BABABA").s().p("AgEAbQgDgDAAgGIAAgbIgGAAIAAgGIAGAAIAAgNIAGgBIAAAOIANAAIAAAGIgNAAIAAAaQAAAEABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIAEgBIAEgBIABAFIgEACIgGABQgFAAgDgDg");
	this.shape_4.setTransform(128.475,31.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BABABA").s().p("AgLAVQgFgEgEgFQgCgFAAgHQAAgGACgGQAEgEAFgEQAFgCAGAAQAHAAAGACQAEAEAEAEQADAGAAAGQAAAHgDAFQgEAFgEAEQgGACgHAAQgGAAgFgCgAgIgOQgEACgCADQgCAEAAAFQAAAFACAEQADAEADACQAEACAEAAQAFAAAEgCQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgCQgEgCgFgBQgEABgEACg");
	this.shape_5.setTransform(124,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BABABA").s().p("AgRAgIgCgBIAAgFIACAAIABAAQAEAAADgCQACgCADgFIADgGIgUgqIAHAAIAPAiIAOgiIAGAAIgUAyQgCAHgEADQgEADgGAAIgCAAg");
	this.shape_6.setTransform(119.1,33.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BABABA").s().p("AgMAVQgEgEgEgFQgCgFAAgHQAAgGACgGQAEgEAEgEQAGgCAGAAQAHAAAGACQAEAEAEAEQACAGAAAGQAAAHgCAFQgEAFgEAEQgGACgHAAQgGAAgGgCgAgIgOQgEACgCADQgCAEAAAFQAAAFACAEQADAEADACQAEACAEAAQAFAAAEgCQAEgCACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgEgCgFgBQgEABgEACg");
	this.shape_7.setTransform(114.2,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BABABA").s().p("AgEAbQgDgDAAgGIAAgbIgGAAIAAgGIAGAAIAAgNIAGgBIAAAOIANAAIAAAGIgNAAIAAAaQAAAEABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIAEgBIAEgBIABAFIgEACIgGABQgFAAgDgDg");
	this.shape_8.setTransform(110.025,31.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_9.setTransform(104.975,31.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_10.setTransform(101.825,32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BABABA").s().p("AAPAhIAAgkIgcAkIgHAAIAAgsIAHAAIAAAjIAcgjIAGAAIAAAsgAgJgXQgEgDABgGIAEAAQAAAEADACQACACADAAQAEAAACgCQADgCgBgEIAGAAQgBAGgEADQgDAEgGAAQgGAAgDgEg");
	this.shape_11.setTransform(97,31.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFAAQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgDAAgFIAAgFIgOACg");
	this.shape_12.setTransform(91.475,32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BABABA").s().p("AgIAVQgFgEgDgEQgCgGAAgHQAAgGACgGQADgEAFgEQAFgCAGAAQAFgBAEACIAHADIgCAGIgHgDIgHgCQgEABgDACQgEACgCADQgCAEAAAFQAAAFACAEQACAEADACQAEACAEAAIAIgBQAEgBADgCIABAFQgDACgEACQgEABgGAAQgFAAgFgCg");
	this.shape_13.setTransform(86.8,32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFAAQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgDAAgFIAAgFIgOACg");
	this.shape_14.setTransform(79.525,32.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BABABA").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_15.setTransform(74.375,32.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BABABA").s().p("AAPAXIAAgkIgdAkIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsg");
	this.shape_16.setTransform(66.55,32.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADACQAEADAAAFQAAAEgCADQgCADgDAAQAFABADACQADACAAAFQAAAFgDADQgCADgDABQgEABgFABgAgLARIAMAAQAFAAADgCQACgBAAgFQAAgEgDgBQgDgCgFAAIgLAAgAgLgCIALAAIAEgBIADgDIABgEQAAgDgCgCQgDgCgEAAIgKAAg");
	this.shape_17.setTransform(61.525,32.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BABABA").s().p("AgLAVQgGgEgCgFQgEgFAAgHQAAgGAEgGQACgEAGgEQAFgCAGAAQAHAAAFACQAGAEACAEQADAGABAGQgBAHgDAFQgCAFgGAEQgFACgHAAQgGAAgFgCgAgIgOQgEACgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgEABgFQgBgFgCgEQgCgDgEgCQgEgCgFgBQgEABgEACg");
	this.shape_18.setTransform(56.2,32.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BABABA").s().p("AATAXIAAgjIgRAcIgEAAIgQgcIAAAjIgGAAIAAgsIAHAAIARAeIASgeIAHAAIAAAsg");
	this.shape_19.setTransform(50.175,32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BABABA").s().p("AgRAgIgCgBIAAgFIABAAIACAAQAEAAADgCQADgCACgFIADgGIgTgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgGAAIgCAAg");
	this.shape_20.setTransform(44.7,33.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_21.setTransform(39.225,31.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BABABA").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_22.setTransform(35.375,32.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BABABA").s().p("AgQAXIAAgsIAGAAIAAATIALAAQAIAAAEACQAEADAAAGQAAAEgCADQgCADgDACQgEABgEABgAgKARIALAAQAFAAADgCQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_23.setTransform(30.525,32.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BABABA").s().p("AgUAXIgCgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgGAAIAAgmIgTAAIgDAbQgBAGgCADQgDADgEAAIgFAAg");
	this.shape_24.setTransform(24.95,32.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFAAQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgDAAgFIAAgFIgOACg");
	this.shape_25.setTransform(19.975,32.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_26.setTransform(15.525,32.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAEQADAFAAAHIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEABgGAAQgHAAgFgDgAAPgDIgCgIIgFgEQgEgCgEAAIgGACIgFAEIgDAIIAdAAIAAAAg");
	this.shape_27.setTransform(11.025,32.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BABABA").s().p("AAWAoIAAgPIgsAAIAAAPIgFAAIAAgWIADAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQACgDABgDIABgIIAFgpIAgAAIAAA4IAHAAIAAAWgAgJAEIgCAKQgCADgCABIAeAAIAAgzIgUAAg");
	this.shape_28.setTransform(5.35,32.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BABABA").s().p("AgDADIgBgDIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_29.setTransform(-1.025,34.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_30.setTransform(-4.925,32.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BABABA").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_31.setTransform(-9.725,32.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BABABA").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_32.setTransform(-15.175,32.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAEQADAFAAAHIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEABgGAAQgHAAgFgDgAAPgDIgCgIIgFgEQgEgCgEAAIgGACIgFAEIgDAIIAdAAIAAAAg");
	this.shape_33.setTransform(-20.425,32.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BABABA").s().p("AAZAXIgUgVIgCAAIAAAVIgFAAIAAgVIgCAAIgUAVIgIAAIAXgYIgWgUIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAUIAWAYg");
	this.shape_34.setTransform(-26.325,32.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAEQADAFAAAHIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEABgGAAQgHAAgFgDgAAPgDIgCgIIgFgEQgEgCgEAAIgGACIgFAEIgDAIIAdAAIAAAAg");
	this.shape_35.setTransform(-32.175,32.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BABABA").s().p("AATAXIAAgjIgRAcIgEAAIgQgcIAAAjIgGAAIAAgsIAHAAIARAeIASgeIAHAAIAAAsg");
	this.shape_36.setTransform(-38.025,32.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BABABA").s().p("AgIAhQgEgBgDgEQgDgEgCgHIgDgRQAAgJADgHQACgHAGgEQAFgDAIgCIAEAAIACgBIAFAAIAEAAIADgBIABAGIgGABIgGAAIgCAAIgDABIgKADQgEACgCAFQgCAFgBAJQADgEAFgCQAEgDAGAAQAGAAAFADQAFADACAFQAEAEAAAHQAAAHgEAFQgCAGgGADQgEADgIAAQgEAAgEgCgAgGgEIgFAEIgFAFQABAJACAFQACAGAEACQAEACADAAQAFAAAEgCQAEgDACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgDgCgFAAQgDAAgEABg");
	this.shape_37.setTransform(-44.05,31.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BABABA").s().p("AgMAVQgEgEgEgFQgCgFAAgHQAAgGACgGQAEgEAEgEQAGgCAGAAQAHAAAGACQAEAEAEAEQACAGAAAGQAAAHgCAFQgEAFgEAEQgGACgHAAQgGAAgGgCgAgIgOQgEACgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgEgCgFgBQgEABgEACg");
	this.shape_38.setTransform(-49.6,32.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BABABA").s().p("AgQAXIAAgsIAGAAIAAATIALAAQAIAAAEACQAEADAAAGQAAAEgCADQgCADgDACQgEABgEABgAgKARIALAAQAFAAADgCQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_39.setTransform(-56.725,32.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_40.setTransform(-61.275,32.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BABABA").s().p("AgCAVQgFgDgDgEQgDgFgBgGIgMAAIAAAUIgGAAIAAgsIAGAAIAAATIAMAAQABgGADgFQADgEAFgDQAEgDAHABQAHAAAFACQAGAEADAEQADAGAAAGQAAAHgDAFQgDAFgGAEQgFACgHAAQgHAAgEgCgAAAgOIgFAFQgCAEAAAFQAAAFACAEQACAEADACQAEACAFAAQAFAAAEgCQAEgCACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgEgCgFgBQgFABgEACg");
	this.shape_41.setTransform(-66.925,32.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_42.setTransform(-72.075,31.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BABABA").s().p("AAWAoIAAgPIgsAAIAAAPIgFAAIAAgWIADAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQACgDACgDIABgIIAFgpIAgAAIAAA4IAIAAIAAAWgAgJAEIgDAKQgBADgCABIAdAAIAAgzIgTAAg");
	this.shape_43.setTransform(-76.3,32.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BABABA").s().p("AgDADIgBgDIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_44.setTransform(-82.675,34.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BABABA").s().p("AgQAdQgIgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAIgEQAHgFAJAAQAKAAAHAFQAIAEAEAHQAEAIAAAIQAAAKgEAHQgEAIgIAEQgHAEgKAAQgJAAgHgEgAgNgWQgGAEgDAFQgDAHAAAGQAAAIADAFQADAHAGADQAGADAHABQAIgBAGgDQAGgDADgHQADgFAAgIQAAgGgDgHQgDgFgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_45.setTransform(-87.825,31.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BABABA").s().p("AgCAgIAAg5IgSAAIAAgGIApAAIAAAGIgSAAIAAA5g");
	this.shape_46.setTransform(-94,31.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BABABA").s().p("AgLAVQgGgEgCgFQgEgFAAgHQAAgGAEgGQACgEAGgEQAFgCAGAAQAHAAAFACQAGAEACAEQADAGABAGQgBAHgDAFQgCAFgGAEQgFACgHAAQgGAAgFgCgAgIgOQgEACgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgEABgFQgBgFgCgEQgCgDgEgCQgEgCgFgBQgEABgEACg");
	this.shape_47.setTransform(-101.3,32.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BABABA").s().p("AgMAXIAAgsIAZAAIAAAFIgTAAIAAAng");
	this.shape_48.setTransform(-105.575,32.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BABABA").s().p("AgLAVQgFgEgEgFQgCgFAAgHQAAgGACgGQAEgEAFgEQAFgCAGAAQAHAAAGACQAEAEAEAEQADAGAAAGQAAAHgDAFQgEAFgEAEQgGACgHAAQgGAAgFgCgAgIgOQgEACgCADQgCAEAAAFQAAAFACAEQADAEADACQAEACAEAAQAFAAAEgCQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgCQgEgCgFgBQgEABgEACg");
	this.shape_49.setTransform(-110.45,32.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BABABA").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_50.setTransform(-115.925,32.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BABABA").s().p("AANAXIAAgnIgZAAIAAAnIgGAAIAAgsIAlAAIAAAsg");
	this.shape_51.setTransform(-121.325,32.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BABABA").s().p("AgRAgIgDgBIABgFIABAAIACAAQAEAAADgCQADgCACgFIACgGIgSgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgFAAIgDAAg");
	this.shape_52.setTransform(-126.2,33.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_53.setTransform(-130.375,32.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BABABA").s().p("AgIAVQgFgEgDgEQgCgGAAgHQAAgGACgGQADgEAFgEQAFgCAGAAQAFgBAEACIAHADIgCAGIgHgDIgHgCQgEABgDACQgEACgCADQgCAEAAAFQAAAFACAEQACAEADACQAEACAEAAIAIgBQAEgBADgCIABAFQgDACgEACQgEABgGAAQgFAAgFgCg");
	this.shape_54.setTransform(-134.6,32.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFAAQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgDAAgFIAAgFIgOACg");
	this.shape_55.setTransform(-139.625,32.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BABABA").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_56.setTransform(-144.775,32.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BABABA").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgFQAEgGAFgCQAFgEAGAAQAHAAAGAEQAEACAEAGQADAFAAAGQAAAHgDAFQgEAFgEADQgGADgHABQgGgBgFgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgFgDgDQgCgEgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_57.setTransform(128.5,22.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADAAACgCQACgDAAgGIAEgbIAcAAIAAAmIAHAAIAAATgAgHAAIgBAHIgDADIAWAAIAAggIgQAAg");
	this.shape_58.setTransform(123.05,23.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BABABA").s().p("AAKAWIgTgVIgCAAIAAAVIgGAAIAAgsIAGAAIAAAUIADAAIARgUIAIAAIgVAWIAWAWg");
	this.shape_59.setTransform(116.4,22.45);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgCgFAAgHQAAgGACgFQAEgGAEgCQAGgEAGAAQAHAAAGAEQAEACAEAGQADAFAAAGQAAAHgDAFQgEAFgEADQgGADgHABQgGgBgGgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQACgEAAgFQAAgFgCgDQgCgEgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_60.setTransform(111.05,22.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BABABA").s().p("AgWAhIAAhAIAGAAIAAAJQADgFAFgCQAFgDAEAAQAGAAAFAEQAFACADAGQADAFAAAHQAAAGgDAFQgDAFgFADQgFADgGABIgGgCIgGgDQgDgCgCgEIAAAdgAgIgYQgDADgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEABQAFgBAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_61.setTransform(105.675,23.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_62.setTransform(100.575,22.45);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BABABA").s().p("AgIAUQgFgCgDgGQgCgFAAgHQAAgGACgFQADgGAFgCQAFgEAGAAQAFAAAEACIAHADIgCAGIgHgEIgHgBQgEAAgDACQgEADgCAEQgCADAAAFQAAAFACAEQACAEADADQAEACAEAAIAIgCQAEgBACgDIACAGQgDADgEABQgEACgGAAQgFgBgFgDg");
	this.shape_63.setTransform(96.35,22.45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgCAEAAQAJAAAFAFQAEAFAAAIIAAAbIgGAAIAAgHQgCAEgEACQgFADgFAAQgHAAgEgEgAgBABQgGABgCACQgDADABADQAAAEACACQADACAFAAIAGgBQADgBADgEQACgCAAgGIAAgEIgOABg");
	this.shape_64.setTransform(89.075,22.45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_65.setTransform(83.925,22.45);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BABABA").s().p("AgKAiQAFAAADgDQACgDABgEQACgFABgGIAAgNIAAgMQgBgGgCgFQgBgEgCgEQgDgCgFgBIAAgFQAGABAEADQAEADADAFIACANQACAHAAAHIgBAPQgBAIgCAFQgDAFgEAEQgDACgHAAg");
	this.shape_66.setTransform(77.35,21.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_67.setTransform(74.825,21.475);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_68.setTransform(70.975,22.45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAAEgXQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABADIgBAEIgEABIgDgBgAgKgXIgBgEIABgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_69.setTransform(67.15,21.475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgCAEAAQAJAAAFAFQAEAFAAAIIAAAbIgGAAIAAgHQgCAEgEACQgFADgFAAQgHAAgEgEgAgBABQgGABgCACQgDADABADQAAAEACACQADACAFAAIAGgBQADgBADgEQACgCAAgGIAAgEIgOABg");
	this.shape_70.setTransform(63.375,22.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BABABA").s().p("AgWAhIAAhAIAGAAIAAAJQADgFAFgCQAFgDAEAAQAGAAAFAEQAFACADAGQADAFAAAHQAAAGgDAFQgDAFgFADQgFADgGABIgGgCIgGgDQgDgCgCgEIAAAdgAgIgYQgDADgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEABQAFgBAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_71.setTransform(58.325,23.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#BABABA").s().p("AAKAWIgTgVIgCAAIAAAVIgGAAIAAgsIAGAAIAAAUIACAAIASgUIAIAAIgUAWIAVAWg");
	this.shape_72.setTransform(53.45,22.45);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BABABA").s().p("AgRAgIgEgCIABgFIAEABIAEABQAEgBACgCQADgCACgFIgZgxIAIAAIATAqIASgqIAIAAIgWAxIgEAIQgBADgDACQgEACgEABIgGgBg");
	this.shape_73.setTransform(48.2,21.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHABADADQAEACAAAGQAAAEgCACQgCADgDABQAFAAADACQADADAAAEQAAAFgDADQgCADgDABQgEABgFAAgAgLASIAMAAQAFAAADgCQACgCAAgFQAAgEgDgCQgDgCgFAAIgLAAgAgLgCIALAAIAEgCIADgDIABgDQAAgDgCgCQgDgBgEgBIgKAAg");
	this.shape_74.setTransform(40.975,22.45);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgCAEAAQAJAAAFAFQAEAFAAAIIAAAbIgGAAIAAgHQgCAEgEACQgFADgFAAQgHAAgEgEgAgBABQgGABgCACQgDADABADQAAAEACACQADACAFAAIAGgBQADgBADgEQACgCAAgGIAAgEIgOABg");
	this.shape_75.setTransform(33.475,22.45);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BABABA").s().p("AgEAbQgDgDAAgGIAAgbIgGAAIAAgGIAGAAIAAgNIAGgBIAAAOIANAAIAAAGIgNAAIAAAaQAAAEABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAEgBIAEgBIABAFIgEACIgGABQgFAAgDgDg");
	this.shape_76.setTransform(29.625,21.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgEgFAAgHQAAgGAEgFQACgGAGgCQAFgEAGAAQAHAAAFAEQAGACACAGQADAFABAGQgBAHgDAFQgCAFgGADQgFADgHABQgGgBgFgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEABgFQgBgFgCgDQgCgEgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_77.setTransform(25.15,22.45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BABABA").s().p("AgRAgIgDgBIABgFIABAAIADAAQADAAADgCQACgCADgFIACgGIgTgqIAIAAIAOAiIAOgiIAHAAIgVAyQgCAHgEADQgEADgFAAIgDAAg");
	this.shape_78.setTransform(20.25,23.425);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgDgFgBgHQABgGADgFQACgGAGgCQAFgEAGAAQAHAAAFAEQAGACACAGQAEAFAAAGQAAAHgEAFQgCAFgGADQgFADgHABQgGgBgFgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEABgFQgBgFgCgDQgCgEgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_79.setTransform(15.35,22.45);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BABABA").s().p("AgCAgIAAg5IgSAAIAAgGIApAAIAAAGIgSAAIAAA5g");
	this.shape_80.setTransform(10.3,21.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BABABA").s().p("AAOAWIgOgTIgNATIgIAAIASgWIgQgWIAHAAIANARIAMgRIAHAAIgQAWIARAWg");
	this.shape_81.setTransform(3.45,22.45);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgCAEAAQAJAAAFAFQAEAFAAAIIAAAbIgGAAIAAgHQgCAEgEACQgFADgFAAQgHAAgEgEgAgBABQgGABgCACQgDADABADQAAAEACACQADACAFAAIAGgBQADgBADgEQACgCAAgGIAAgEIgOABg");
	this.shape_82.setTransform(-1.475,22.45);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BABABA").s().p("AgWAhIAAhAIAGAAIAAAJQADgFAFgCQAFgDAEAAQAGAAAFAEQAFACADAGQADAFAAAHQAAAGgDAFQgDAFgFADQgFADgGABIgGgCIgGgDQgDgCgCgEIAAAdgAgIgYQgDADgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEABQAFgBAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_83.setTransform(-6.525,23.35);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_84.setTransform(-11.625,22.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_85.setTransform(-16.325,22.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgFAFgDQAFgEAFAAQAHAAAEAEQAFACADAGQADAEAAAHIAAAAIgkAAQAAAJAEAEQAFAEAHABQAFgBAEgBIAHgFIACAGIgIAEQgEACgGABQgHAAgFgEgAAPgEIgCgGIgFgGQgEgBgEAAIgGABIgFAGIgDAGIAdAAIAAAAg");
	this.shape_86.setTransform(-21.575,22.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#BABABA").s().p("AARAdIAAgNIgnAAIAAgsIAGAAIAAAmIAZAAIAAgmIAHAAIAAAmIAHAAIAAATg");
	this.shape_87.setTransform(-26.575,23.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BABABA").s().p("AAOAWIgOgTIgNATIgIAAIASgWIgRgWIAIAAIANARIAMgRIAIAAIgRAWIASAWg");
	this.shape_88.setTransform(-34.2,22.45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BABABA").s().p("AAOAWIAAgjIgcAjIgFAAIAAgsIAFAAIAAAjIAcgjIAGAAIAAAsg");
	this.shape_89.setTransform(-39.3,22.45);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BABABA").s().p("AAKAWIgTgVIgCAAIAAAVIgGAAIAAgsIAGAAIAAAUIACAAIASgUIAIAAIgUAWIAVAWg");
	this.shape_90.setTransform(-43.95,22.45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BABABA").s().p("AgQAWIAAgsIAGAAIAAAUIALAAQAIAAAEACQAEADAAAGQAAAFgCADQgCADgDABQgEABgEAAgAgKASIALAAQAFgBADgCQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_91.setTransform(-48.675,22.45);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BABABA").s().p("AgIAUQgFgCgCgGQgDgFgBgHQABgGADgFQACgGAGgCQAEgEAGAAQAFAAAEACIAHADIgDAGIgFgEIgIgBQgDAAgEACQgEADgCAEQgCADAAAFQAAAFACAEQACAEADADQAEACAEAAIAIgCQAEgBADgDIACAGQgDADgFABQgEACgFAAQgGgBgFgDg");
	this.shape_92.setTransform(-53.45,22.45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BABABA").s().p("AgWAhIAAhAIAGAAIAAAJQADgFAFgCQAFgDAEAAQAGAAAFAEQAFACADAGQADAFAAAHQAAAGgDAFQgDAFgFADQgFADgGABIgGgCIgGgDQgDgCgCgEIAAAdgAgIgYQgDADgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEABQAFgBAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_93.setTransform(-58.425,23.35);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgFAFgDQAFgEAFAAQAHAAAEAEQAFACADAGQADAEAAAHIAAAAIgkAAQAAAJAEAEQAFAEAHABQAFgBAEgBQAFgCACgDIACAGIgIAEQgEACgGABQgHAAgFgEgAAPgEIgCgGIgFgGQgEgBgEAAIgGABIgFAGIgDAGIAdAAIAAAAg");
	this.shape_94.setTransform(-64.025,22.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#BABABA").s().p("AgUAXIgCgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgHAAIAAgmIgSAAIgDAbQgBAGgCADQgDADgEAAIgFAAg");
	this.shape_95.setTransform(-69.65,22.475);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BABABA").s().p("AAOAWIAAgjIgbAjIgHAAIAAgsIAHAAIAAAjIAbgjIAHAAIAAAsg");
	this.shape_96.setTransform(-74.8,22.45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADAAACgCQACgDAAgGIAEgbIAcAAIAAAmIAHAAIAAATgAgHAAIgBAHIgDADIAWAAIAAggIgQAAg");
	this.shape_97.setTransform(-80.35,23.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BABABA").s().p("AAPAWIgPgTIgNATIgHAAIASgWIgSgWIAJAAIALARIAOgRIAHAAIgRAWIASAWg");
	this.shape_98.setTransform(-87.5,22.45);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BABABA").s().p("AAOAWIAAgjIgcAjIgGAAIAAgsIAGAAIAAAjIAcgjIAHAAIAAAsg");
	this.shape_99.setTransform(-92.6,22.45);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_100.setTransform(-98.175,22.45);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BABABA").s().p("AAOAhIAAgkIgcAkIgGAAIAAgsIAGAAIAAAjIAcgjIAGAAIAAAsgAgJgXQgDgDgBgGIAGAAQgBAEADACQACACADAAQAEAAACgCQADgCAAgEIAEAAQAAAGgDADQgEAEgGAAQgGAAgDgEg");
	this.shape_101.setTransform(-103.75,21.425);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_102.setTransform(-107.675,21.475);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BABABA").s().p("AARAdIAAgNIgnAAIAAgsIAGAAIAAAmIAZAAIAAgmIAHAAIAAAmIAHAAIAAATg");
	this.shape_103.setTransform(-111.225,23.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_104.setTransform(-115.375,21.475);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BABABA").s().p("AgCArIAAgcQgDAGgEACQgEACgFAAQgGAAgFgDQgEgDgDgFQgCgFAAgHQAAgGACgFQADgGAEgDQAFgDAGAAQAFAAAEACQAEADADAFIAAgfIAFAAIAAAfQADgFAEgDQAEgCAFAAQAGAAAFADQAEADADAFQACAGAAAGQAAAHgCAFQgDAFgEADQgFADgGAAQgFAAgEgCQgEgCgDgGIAAAcgAAKgMQgDACgCAEQgCAEAAAEQAAAFACAEQACADADADQAEACAEAAQAFAAADgCQADgCACgEQACgEAAgFQAAgFgCgDQgCgEgDgDQgDgCgFAAQgEAAgEADgAgZgNQgDADgCAEQgCAEAAAEQAAAFACAEQACAEADACQAEACAEAAQAFAAADgCQADgDACgDQACgEAAgFQAAgEgCgEQgCgEgDgCQgDgDgFAAQgFAAgDACg");
	this.shape_105.setTransform(-120.825,22.275);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgCgFAAgHQAAgGACgFQAEgGAEgCQAGgEAGAAQAHAAAGAEQAEACAEAGQACAFAAAGQAAAHgCAFQgEAFgEADQgGADgHABQgGgBgGgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEAAgFQAAgFgCgDQgCgEgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_106.setTransform(-127.9,22.45);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADADQAEAEAAAEQAAAFgCACQgCADgDAAQAFABADACQADACAAAGQAAAEgDADQgCADgDABQgEABgFAAgAgLARIAMAAQAFAAADgCQACgCAAgDQAAgFgDgBQgDgCgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgBgEAAIgKAAg");
	this.shape_107.setTransform(144.975,12.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#BABABA").s().p("AgQAcQgIgDgEgIQgEgHAAgKQAAgIAEgIQAEgIAIgDQAHgFAJAAQAKAAAHAFQAIADAEAIQAEAIAAAIQAAAKgEAHQgEAIgIADQgHAFgKAAQgJAAgHgFgAgNgWQgGADgDAGQgDAHAAAGQAAAIADAFQADAHAGADQAGADAHABQAIgBAGgDQAGgDADgHQADgFAAgIQAAgGgDgHQgDgGgGgDQgGgDgIAAQgHAAgGADg");
	this.shape_108.setTransform(136.275,11.65);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BABABA").s().p("AgCAgIAAg5IgSAAIAAgGIApAAIAAAGIgSAAIAAA5g");
	this.shape_109.setTransform(130.1,11.65);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BABABA").s().p("AgLAVQgGgDgCgGQgEgFAAgHQAAgGAEgGQACgFAGgDQAFgCAGAAQAHAAAFACQAGADACAFQADAGABAGQgBAHgDAFQgCAGgGADQgFACgHAAQgGAAgFgCgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgEABgFQgBgEgCgFQgCgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_110.setTransform(122.8,12.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#BABABA").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_111.setTransform(118.525,12.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#BABABA").s().p("AgLAVQgFgDgEgGQgCgFAAgHQAAgGACgGQAEgFAFgDQAFgCAGAAQAHAAAGACQAEADAEAFQADAGAAAGQAAAHgDAFQgEAGgEADQgGACgHAAQgGAAgFgCgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEACAEAAQAFAAAEgCQAEgCACgEQADgEgBgFQABgEgDgFQgCgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_112.setTransform(113.65,12.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_113.setTransform(108.175,12.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_114.setTransform(103.425,12.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_115.setTransform(98.725,12.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFADADAFQADAFAAAHIAAABIgkAAQAAAHAEAFQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEABgGAAQgHAAgFgDgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_116.setTransform(93.475,12.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_117.setTransform(87.625,12.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAAAQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJAAAFAEQAEAEAAAKIAAAaIgGAAIAAgIQgCAEgEADQgFADgFgBQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAAEACACQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOACg");
	this.shape_118.setTransform(81.625,12.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BABABA").s().p("AgUAXIgCgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgHAAIAAgmIgSAAIgDAbQgBAGgCADQgDADgEAAIgFAAg");
	this.shape_119.setTransform(76.15,12.625);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BABABA").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_120.setTransform(72.325,12.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFADADAFQADAFAAAHIAAABIgkAAQAAAHAEAFQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEABgGAAQgHAAgFgDgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_121.setTransform(67.675,12.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BABABA").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgDAEABQAGAAAFACQAFADADAFQADAGAAAHQAAAGgDAFQgDAGgFADQgFACgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgXQgDACgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEAAQAFAAAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgCgFAAQgEAAgEACg");
	this.shape_122.setTransform(62.475,13.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_123.setTransform(54.525,12.575);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_124.setTransform(49.725,12.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_125.setTransform(44.275,12.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFADADAFQADAFAAAHIAAABIgkAAQAAAHAEAFQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEABgGAAQgHAAgFgDgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_126.setTransform(39.025,12.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BABABA").s().p("AAZAWIgUgUIgCAAIAAAUIgFAAIAAgUIgCAAIgUAUIgIAAIAXgXIgWgVIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAVIAWAXg");
	this.shape_127.setTransform(33.125,12.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgSIADAAQADgBACgCQACgDAAgFIAEgcIAcAAIAAAnIAHAAIAAASgAgHAAIgBAGIgDAFIAXAAIAAgiIgRAAg");
	this.shape_128.setTransform(27.1,13.25);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#BABABA").s().p("AgLAVQgGgDgCgGQgDgFAAgHQAAgGADgGQACgFAGgDQAFgCAGAAQAHAAAGACQAEADADAFQAEAGAAAGQAAAHgEAFQgDAGgEADQgGACgHAAQgGAAgFgCgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQADgEgBgFQABgEgDgFQgCgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_129.setTransform(21.75,12.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#BABABA").s().p("AAPAWIgPgSIgNASIgHAAIASgWIgRgWIAIAAIALASIAOgSIAGAAIgQAWIARAWg");
	this.shape_130.setTransform(16.7,12.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#BABABA").s().p("AgMAVQgFgDgDgGQgCgFAAgHQAAgGACgGQADgFAFgDQAGgCAGAAQAHAAAGACQAFADADAFQACAGAAAGQAAAHgCAFQgDAGgFADQgGACgHAAQgGAAgGgCgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEACAEAAQAFAAAEgCQAEgCACgEQACgEAAgFQAAgEgCgFQgCgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_131.setTransform(11.7,12.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#BABABA").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgDAEABQAGAAAFACQAFADADAFQADAGAAAHQAAAGgDAFQgDAGgFADQgFACgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgXQgDACgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEAAQAFAAAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgCgFAAQgEAAgEACg");
	this.shape_132.setTransform(6.325,13.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#BABABA").s().p("AANAWIAAgmIgZAAIAAAmIgGAAIAAgsIAlAAIAAAsg");
	this.shape_133.setTransform(0.575,12.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BABABA").s().p("AAPAWIAAgjIgdAjIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsg");
	this.shape_134.setTransform(-7.25,12.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADADQAEAEAAAEQAAAFgCACQgCADgDAAQAFABADACQADACAAAGQAAAEgDADQgCADgDABQgEABgFAAgAgLARIAMAAQAFAAADgCQACgCAAgDQAAgFgDgBQgDgCgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgBgEAAIgKAAg");
	this.shape_135.setTransform(-12.275,12.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#BABABA").s().p("AgLAVQgGgDgCgGQgEgFAAgHQAAgGAEgGQACgFAGgDQAFgCAGAAQAHAAAFACQAGADACAFQADAGABAGQgBAHgDAFQgCAGgGADQgFACgHAAQgGAAgFgCgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgEABgFQgBgEgCgFQgCgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_136.setTransform(-17.6,12.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_137.setTransform(-23.625,12.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#BABABA").s().p("AgRAgIgCgBIAAgFIABAAIACAAQAEAAADgCQADgCACgFIADgGIgTgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgGAAIgCAAg");
	this.shape_138.setTransform(-29.1,13.575);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAAAQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJAAAFAEQAEAEAAAKIAAAaIgGAAIAAgIQgCAEgEADQgFADgFgBQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAAEACACQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOACg");
	this.shape_139.setTransform(-36.175,12.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BABABA").s().p("AgLAWIgHgDIACgGIAHADIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIgFgCIgLgBIAAgFQAIAAAEgBQAEgCAAgEQAAgDgDgCQgCgCgFAAIgHABIgGADIgCgGIAHgDIAIAAQAIAAAEACQAEADABAGQAAAEgDADQgDADgGABIAHABQADABACADQACACAAAEQAAADgDADQgCAEgEABQgFACgFgBQgGABgFgCg");
	this.shape_140.setTransform(-40.975,12.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_141.setTransform(-48.025,12.575);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BABABA").s().p("AgTAXIgDgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgGAAIAAgmIgSAAIgEAbQAAAGgDADQgDADgFAAIgDAAg");
	this.shape_142.setTransform(-53.15,12.625);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_143.setTransform(-56.525,11.625);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#BABABA").s().p("AgIAhQgEgBgDgEQgEgEgBgHIgDgRQAAgJADgHQADgHAFgEQAFgDAIgCIADAAIADgBIAFAAIAEAAIADgBIABAGIgHABIgFAAIgCAAIgDABIgKADQgEACgCAFQgCAFgBAJQADgEAFgCQAFgDAFAAQAGAAAFADQAFADACAFQADAEABAHQgBAHgDAFQgCAGgGADQgEADgIAAQgDAAgFgCgAgGgEIgFAEIgFAFQABAJACAFQACAGAEACQAEACADAAQAFAAAEgCQAEgDACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgDgCgFAAQgDAAgEABg");
	this.shape_144.setTransform(-60.35,11.475);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#BABABA").s().p("AgLAVQgFgDgEgGQgCgFAAgHQAAgGACgGQAEgFAFgDQAFgCAGAAQAHAAAGACQAEADAEAFQADAGAAAGQAAAHgDAFQgEAGgEADQgGACgHAAQgGAAgFgCgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEACAEAAQAFAAAEgCQAEgCACgEQADgEgBgFQABgEgDgFQgCgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_145.setTransform(-65.9,12.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_146.setTransform(-71.925,12.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#BABABA").s().p("AgMAVQgEgDgDgGQgEgFAAgHQAAgGAEgGQADgFAEgDQAGgCAGAAQAHAAAFACQAGADACAFQADAGAAAGQAAAHgDAFQgCAGgGADQgFACgHAAQgGAAgGgCgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEACAEAAQAFAAAEgCQAEgCACgEQACgEABgFQgBgEgCgFQgCgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_147.setTransform(-78,12.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_148.setTransform(-82.775,12.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADADQAEAEAAAEQAAAFgCACQgCADgDAAQAFABADACQADACAAAGQAAAEgDADQgCADgDABQgEABgFAAgAgLARIAMAAQAFAAADgCQACgCAAgDQAAgFgDgBQgDgCgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgBgEAAIgKAAg");
	this.shape_149.setTransform(-86.925,12.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAAAQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJAAAFAEQAEAEAAAKIAAAaIgGAAIAAgIQgCAEgEADQgFADgFgBQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAAEACACQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOACg");
	this.shape_150.setTransform(-92.175,12.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#BABABA").s().p("AAOAWIAAgjIgcAjIgGAAIAAgsIAGAAIAAAjIAcgjIAGAAIAAAsg");
	this.shape_151.setTransform(-99.7,12.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_152.setTransform(-104.575,12.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAAAQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJAAAFAEQAEAEAAAKIAAAaIgGAAIAAgIQgCAEgEADQgFADgFgBQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAAEACACQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOACg");
	this.shape_153.setTransform(-109.225,12.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_154.setTransform(-113.675,12.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFADADAFQADAFAAAHIAAABIgkAAQAAAHAEAFQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEABgGAAQgHAAgFgDgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_155.setTransform(-118.175,12.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#BABABA").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgDAEABQAGAAAFACQAFADADAFQADAGAAAHQAAAGgDAFQgDAGgFADQgFACgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgXQgDACgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEAAQAFAAAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgCgFAAQgEAAgEACg");
	this.shape_156.setTransform(-123.375,13.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#BABABA").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_157.setTransform(-127.975,12.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAAAQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJAAAFAEQAEAEAAAKIAAAaIgGAAIAAgIQgCAEgEADQgFADgFgBQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAAEACACQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOACg");
	this.shape_158.setTransform(-132.775,12.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAAAQAAgGgDgDQgDgEgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgCAEABQAJAAAFAEQAEAEAAAKIAAAaIgGAAIAAgIQgCAEgEADQgFADgFgBQgHAAgEgDgAgBACQgGABgCACQgDACABADQAAAEACACQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOACg");
	this.shape_159.setTransform(-140.125,12.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_160.setTransform(-144.575,12.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#BABABA").s().p("AAOAXIAAgkIgcAkIgGAAIAAgsIAGAAIAAAjIAcgjIAGAAIAAAsg");
	this.shape_161.setTransform(145.55,2.75);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#BABABA").s().p("AgTAXIgDgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgGAAIAAgmIgSAAIgDAbQgCAGgCADQgDADgFAAIgDAAg");
	this.shape_162.setTransform(139.65,2.775);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#BABABA").s().p("AgLAWIgHgEIACgGIAHAEIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgDQAEgBAAgEQAAgEgDgCQgCgBgFAAIgHABIgGADIgCgFIAHgDIAIgCQAIABAEADQAEADABAFQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDADQgCACgEACQgFACgFAAQgGAAgFgCg");
	this.shape_163.setTransform(134.975,2.75);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#BABABA").s().p("AgRAgIgCgBIAAgFIABAAIACAAQAEAAADgCQADgCACgFIADgGIgTgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgGAAIgCAAg");
	this.shape_164.setTransform(130.65,3.725);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADADQAEACAAAGQAAAEgCACQgCACgDACQAFAAADACQADADAAAEQAAAFgDADQgCADgDABQgEACgFAAgAgLASIAMAAQAFgBADgBQACgDAAgEQAAgDgDgDQgDgCgFAAIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgBgEgBIgKAAg");
	this.shape_165.setTransform(126.325,2.75);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_166.setTransform(120.425,1.775);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#BABABA").s().p("AATAXIAAgjIgRAcIgEAAIgQgcIAAAjIgGAAIAAgsIAHAAIARAeIASgeIAHAAIAAAsg");
	this.shape_167.setTransform(116.025,2.75);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgFAFgDQAFgDAFgBQAHABAEADQAFACADAGQADAEAAAHIAAAAIgkAAQAAAJAEAEQAFAEAHABQAFgBAEgBQAFgCACgDIACAGIgIAEQgEADgGAAQgHAAgFgEgAAPgDIgCgHIgFgGQgEgBgEAAIgGABIgFAGIgDAHIAdAAIAAAAg");
	this.shape_168.setTransform(110.175,2.75);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgGAFgCQAFgDAEAAQAGABAFADQAFACADAGQADAFAAAHQAAAGgDAFQgDAFgFADQgFAEgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEACAEAAQAFAAAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_169.setTransform(104.975,3.65);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#BABABA").s().p("AAKAXIgTgWIgCAAIAAAWIgGAAIAAgsIAGAAIAAATIADAAIARgTIAIAAIgVAVIAWAXg");
	this.shape_170.setTransform(100.1,2.75);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#BABABA").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgFQAEgGAFgCQAFgDAGgBQAHABAGADQAEACAEAGQADAFAAAGQAAAHgDAFQgEAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_171.setTransform(94.75,2.75);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMAAIAAgCQAAgFgDgEQgDgDgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgCAEAAQAJAAAFAFQAEAFAAAIIAAAcIgGAAIAAgIQgCAEgEACQgFADgFAAQgHAAgEgEgAgBABQgGABgCADQgDABABAEQAAADACADQADACAFAAIAGgBQADgBADgEQACgDAAgEIAAgFIgOABg");
	this.shape_172.setTransform(87.075,2.75);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_173.setTransform(81.925,2.75);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#BABABA").s().p("AgQAXIAAgsIAGAAIAAATIALAAQAIAAAEACQAEACAAAHQAAAFgCADQgCADgDABQgEACgEAAgAgKASIALAAQAFgBADgCQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_174.setTransform(74.825,2.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_175.setTransform(69.575,2.75);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMAAIAAgCQAAgFgDgEQgDgDgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgCAEAAQAJAAAFAFQAEAFAAAIIAAAcIgGAAIAAgIQgCAEgEACQgFADgFAAQgHAAgEgEgAgBABQgGABgCADQgDABABAEQAAADACADQADACAFAAIAGgBQADgBADgEQACgDAAgEIAAgFIgOABg");
	this.shape_176.setTransform(64.175,2.75);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#BABABA").s().p("AgLAWIgHgEIACgGIAHAEIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgDQAEgBAAgEQAAgEgDgCQgCgBgFAAIgHABIgGADIgCgFIAHgDIAIgCQAIABAEADQAEADABAFQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDADQgCACgEACQgFACgFAAQgGAAgFgCg");
	this.shape_177.setTransform(59.375,2.75);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_178.setTransform(54.575,2.725);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#BABABA").s().p("AgFAJIAFgRIAHAAIgHARg");
	this.shape_179.setTransform(51.55,-0.475);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADADQAEACAAAGQAAAEgCACQgCACgDACQAFAAADACQADADAAAEQAAAFgDADQgCADgDABQgEACgFAAgAgLASIAMAAQAFgBADgBQACgDAAgEQAAgDgDgDQgDgCgFAAIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgBgEgBIgKAAg");
	this.shape_180.setTransform(48.425,2.75);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgCgFAAgHQAAgGACgFQAEgGAEgCQAGgDAGgBQAHABAGADQAEACAEAGQACAFABAGQgBAHgCAFQgEAFgEADQgGAEgHAAQgGAAgGgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEAAgFQAAgFgCgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_181.setTransform(43.1,2.75);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#BABABA").s().p("AgHAhQgFgBgDgEQgDgEgDgHIgCgRQABgJACgHQACgHAGgEQAFgDAIgCIADAAIADgBIAFAAIAEAAIADgBIABAGIgHABIgFAAIgDAAIgCABIgKADQgEACgCAFQgDAFAAAJQADgEAFgCQAFgDAFAAQAGAAAFADQAFADACAFQADAEAAAHQAAAHgDAFQgCAGgGADQgFADgGAAQgEAAgEgCgAgGgEIgGAEIgEAFQAAAJADAFQACAGAEACQAEACAEAAQAFAAAEgCQADgDACgEQACgEAAgFQAAgFgCgEQgCgDgDgCQgEgCgFAAQgDAAgEABg");
	this.shape_182.setTransform(37.65,1.625);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgDgFAAgHQAAgGADgFQACgGAGgCQAFgDAGgBQAHABAGADQAEACADAGQAEAFAAAGQAAAHgEAFQgDAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_183.setTransform(32.1,2.75);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#BABABA").s().p("AgLAWIgHgEIACgGIAHAEIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgDQAEgBAAgEQAAgEgDgCQgCgBgFAAIgHABIgGADIgCgFIAHgDIAIgCQAIABAEADQAEADABAFQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDADQgCACgEACQgFACgFAAQgGAAgFgCg");
	this.shape_184.setTransform(26.975,2.75);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#BABABA").s().p("AAOAXIgOgUIgNAUIgIAAIASgXIgRgVIAIAAIANAQIANgQIAHAAIgRAVIASAXg");
	this.shape_185.setTransform(20.25,2.75);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#BABABA").s().p("AAOAXIAAgkIgcAkIgFAAIAAgsIAFAAIAAAjIAcgjIAGAAIAAAsg");
	this.shape_186.setTransform(15.15,2.75);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_187.setTransform(9.575,2.75);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#BABABA").s().p("AAPAhIAAgkIgdAkIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsgAgJgXQgEgDAAgGIAFAAQABAEACACQACACADAAQAEAAACgCQACgCABgEIAEAAQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_188.setTransform(4,1.725);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_189.setTransform(0.075,1.775);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_190.setTransform(-3.075,2.75);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_191.setTransform(-7.775,2.75);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMAAIAAgCQAAgFgDgEQgDgDgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgCAEAAQAJAAAFAFQAEAFAAAIIAAAcIgGAAIAAgIQgCAEgEACQgFADgFAAQgHAAgEgEgAgBABQgGABgCADQgDABABAEQAAADACADQADACAFAAIAGgBQADgBADgEQACgDAAgEIAAgFIgOABg");
	this.shape_192.setTransform(-13.175,2.75);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgGAFgCQAFgDAEAAQAGABAFADQAFACADAGQADAFAAAHQAAAGgDAFQgDAFgFADQgFAEgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEACAEAAQAFAAAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_193.setTransform(-18.225,3.65);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMAAIAAgCQAAgFgDgEQgDgDgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgCAEAAQAJAAAFAFQAEAFAAAIIAAAcIgGAAIAAgIQgCAEgEACQgFADgFAAQgHAAgEgEgAgBABQgGABgCADQgDABABAEQAAADACADQADACAFAAIAGgBQADgBADgEQACgDAAgEIAAgFIgOABg");
	this.shape_194.setTransform(-23.975,2.75);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#BABABA").s().p("AgMAXIAAgsIAZAAIAAAFIgTAAIAAAng");
	this.shape_195.setTransform(-27.925,2.75);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_196.setTransform(-34.925,2.725);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_197.setTransform(-39.725,2.75);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_198.setTransform(-45.175,2.75);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgFAFgDQAFgDAFgBQAHABAEADQAFACADAGQADAEAAAHIAAAAIgkAAQAAAJAEAEQAFAEAHABQAFgBAEgBQAFgCACgDIACAGIgIAEQgEADgGAAQgHAAgFgEgAAPgDIgCgHIgFgGQgEgBgEAAIgGABIgFAGIgDAHIAdAAIAAAAg");
	this.shape_199.setTransform(-50.425,2.75);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#BABABA").s().p("AAZAXIgUgWIgCAAIAAAWIgFAAIAAgWIgCAAIgUAWIgIAAIAXgXIgWgVIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAVIAWAXg");
	this.shape_200.setTransform(-56.325,2.75);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADADQAEACAAAGQAAAEgCACQgCACgDACQAFAAADACQADADAAAEQAAAFgDADQgCADgDABQgEACgFAAgAgLASIAMAAQAFgBADgBQACgDAAgEQAAgDgDgDQgDgCgFAAIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgBgEgBIgKAAg");
	this.shape_201.setTransform(-61.825,2.75);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgCgFAAgHQAAgGACgFQAEgGAEgCQAGgDAGgBQAHABAGADQAEACAEAGQACAFAAAGQAAAHgCAFQgEAFgEADQgGAEgHAAQgGAAgGgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEAAgFQAAgFgCgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_202.setTransform(-67.15,2.75);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADAAACgCQACgDAAgGIAEgbIAcAAIAAAmIAHAAIAAATgAgHAAIgBAGIgDAEIAWAAIAAggIgQAAg");
	this.shape_203.setTransform(-72.6,3.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgCgFAAgHQAAgGACgFQAEgGAEgCQAGgDAGgBQAHABAGADQAEACAEAGQACAFAAAGQAAAHgCAFQgEAFgEADQgGAEgHAAQgGAAgGgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEAAgFQAAgFgCgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_204.setTransform(-77.95,2.75);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgGAFgCQAFgDAEAAQAGABAFADQAFACADAGQADAFAAAHQAAAGgDAFQgDAFgFADQgFAEgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEACAEAAQAFAAAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_205.setTransform(-83.325,3.65);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#BABABA").s().p("AANAXIAAgnIgZAAIAAAnIgGAAIAAgsIAlAAIAAAsg");
	this.shape_206.setTransform(-89.075,2.75);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgEgFAAgHQAAgGAEgFQACgGAGgCQAFgDAGgBQAHABAFADQAGACACAGQADAFABAGQgBAHgDAFQgCAFgGADQgFAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEABgFQgBgFgCgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_207.setTransform(-96.8,2.75);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#BABABA").s().p("AgMAXIAAgsIAZAAIAAAFIgTAAIAAAng");
	this.shape_208.setTransform(-101.075,2.75);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#BABABA").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgFQAEgGAFgCQAFgDAGgBQAHABAGADQAEACAEAGQADAFAAAGQAAAHgDAFQgEAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_209.setTransform(-105.95,2.75);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#BABABA").s().p("AgeAXIAAgsIAGAAIAAAmIAWAAIAAgmIAFAAIAAAmIAWAAIAAgmIAGAAIAAAsg");
	this.shape_210.setTransform(-112.625,2.75);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#BABABA").s().p("AgQAXIAAgsIAGAAIAAATIALAAQAIAAAEACQAEACAAAHQAAAFgCADQgCADgDABQgEACgEAAgAgKASIALAAQAFgBADgCQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_211.setTransform(-118.675,2.75);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BABABA").s().p("AgTAXIgDgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgGAAIAAgmIgSAAIgEAbQAAAGgDADQgDADgFAAIgDAAg");
	this.shape_212.setTransform(-124.25,2.775);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMAAIAAgCQAAgFgDgEQgDgDgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgCAEAAQAJAAAFAFQAEAFAAAIIAAAcIgGAAIAAgIQgCAEgEACQgFADgFAAQgHAAgEgEgAgBABQgGABgCADQgDABABAEQAAADACADQADACAFAAIAGgBQADgBADgEQACgDAAgEIAAgFIgOABg");
	this.shape_213.setTransform(-129.225,2.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADAAACgCQACgDAAgGIAEgbIAcAAIAAAmIAHAAIAAATgAgHAAIgBAGIgDAEIAWAAIAAggIgQAAg");
	this.shape_214.setTransform(-134.35,3.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#BABABA").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgFQAEgGAFgCQAFgDAGgBQAHABAGADQAEACAEAGQADAFAAAGQAAAHgDAFQgEAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_215.setTransform(-139.7,2.75);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#BABABA").s().p("AANAXIAAgnIgZAAIAAAnIgGAAIAAgsIAlAAIAAAsg");
	this.shape_216.setTransform(-145.125,2.75);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAFgEACQgFADgFgBQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAADACADQADACAFAAIAGgBQADgCADgDQACgDAAgFIAAgEIgOACg");
	this.shape_217.setTransform(136.125,-7.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_218.setTransform(131.675,-7.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_219.setTransform(124.825,-7.125);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_220.setTransform(120.025,-7.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_221.setTransform(114.575,-7.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAFgEACQgFADgFgBQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAADACADQADACAFAAIAGgBQADgCADgDQACgDAAgFIAAgEIgOACg");
	this.shape_222.setTransform(109.175,-7.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADAAACgCQACgDAAgFIAEgcIAcAAIAAAmIAHAAIAAATgAgHAAIgBAHIgDADIAXAAIAAghIgQAAg");
	this.shape_223.setTransform(104.05,-6.45);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAFgEACQgFADgFgBQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAADACADQADACAFAAIAGgBQADgCADgDQACgDAAgFIAAgEIgOACg");
	this.shape_224.setTransform(98.775,-7.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_225.setTransform(93.625,-7.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#BABABA").s().p("AgQAWIAAgsIAGAAIAAATIALAAQAIAAAEADQAEADAAAGQAAAEgCADQgCAEgDABQgEACgEgBgAgKASIALAAQAFAAADgDQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_226.setTransform(86.525,-7.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_227.setTransform(81.975,-7.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#BABABA").s().p("AgIAVQgFgEgCgFQgEgFAAgHQAAgGAEgGQACgEAFgEQAFgDAHAAQAEABAEABIAHADIgDAGIgFgDIgHgBQgEAAgEACQgEABgCAFQgCAEAAAEQAAAFACAEQACAEAEACQADACAEABIAIgCQADgBADgDIADAGQgDACgFACQgEACgFgBQgGAAgFgCg");
	this.shape_228.setTransform(77.75,-7.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_229.setTransform(74.325,-8.075);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADADQAEAEAAAEQAAAEgCADQgCACgDABQAFABADACQADADAAAFQAAAEgDADQgCADgDABQgEACgFgBgAgLASIAMAAQAFgBADgCQACgCAAgDQAAgFgDgCQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgBgEAAIgKAAg");
	this.shape_230.setTransform(71.025,-7.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#BABABA").s().p("AAOAWIAAgjIgbAjIgHAAIAAgsIAHAAIAAAjIAbgjIAHAAIAAAsg");
	this.shape_231.setTransform(65.6,-7.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#BABABA").s().p("AgTAXIgDgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgGAAIAAgmIgSAAIgEAbQAAAGgDADQgDADgFAAIgDAAg");
	this.shape_232.setTransform(59.7,-7.075);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#BABABA").s().p("AAZAWIgUgUIgCAAIAAAUIgFAAIAAgUIgCAAIgUAUIgIAAIAXgXIgWgVIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAVIAWAXg");
	this.shape_233.setTransform(54.075,-7.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#BABABA").s().p("AgMAVQgEgDgDgGQgEgFAAgHQAAgGAEgGQADgEAEgEQAGgDAGAAQAHAAAFADQAGAEACAEQADAGAAAGQAAAHgDAFQgCAGgGADQgFACgHAAQgGAAgGgCgAgIgOQgEACgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEABgFQgBgEgCgEQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_234.setTransform(48,-7.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_235.setTransform(41.975,-7.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAFgEACQgFADgFgBQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAADACADQADACAFAAIAGgBQADgCADgDQACgDAAgFIAAgEIgOACg");
	this.shape_236.setTransform(33.725,-7.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_237.setTransform(28.575,-7.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgEQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCQAFgCACgCIACAFIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_238.setTransform(23.325,-7.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#BABABA").s().p("AANAWIAAgSIgGADQgDACgFAAQgFgBgEgCQgEgCgCgDQgCgDAAgGIAAgOIAGAAIAAAMQAAAIADACQAEADAFAAIAHgBIAGgCIAAgWIAGAAIAAAsg");
	this.shape_239.setTransform(18.075,-7.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAFgEACQgFADgFgBQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAADACADQADACAFAAIAGgBQADgCADgDQACgDAAgFIAAgEIgOACg");
	this.shape_240.setTransform(12.825,-7.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#BABABA").s().p("AgIAhQgEgBgDgEQgDgEgCgHIgDgRQAAgJADgHQACgHAGgEQAFgDAIgCIAEAAIACgBIAFAAIAEAAIADgBIABAGIgGABIgGAAIgCAAIgDABIgKADQgEACgCAFQgCAFgBAJQADgEAFgCQAEgDAGAAQAGAAAFADQAFADACAFQAEAEAAAHQAAAHgEAFQgCAGgGADQgEADgIAAQgEAAgEgCgAgGgEIgFAEIgFAFQABAJACAFQACAGAEACQAEACADAAQAFAAAEgCQAEgDACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgDgCgFAAQgDAAgEABg");
	this.shape_241.setTransform(7.7,-8.225);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADAAACgCQACgDAAgFIAEgcIAcAAIAAAmIAHAAIAAATgAgHAAIgBAHIgDADIAWAAIAAghIgQAAg");
	this.shape_242.setTransform(2.2,-6.45);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgEQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCQAFgCACgCIACAFIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_243.setTransform(-2.925,-7.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#BABABA").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgCAEgBQAGAAAFADQAFAEADAEQADAGAAAHQAAAHgDAEQgDAGgFADQgFACgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgXQgDACgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEAAQAFAAAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgCgFAAQgEAAgEACg");
	this.shape_244.setTransform(-8.125,-6.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgEQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCQAFgCACgCIACAFIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_245.setTransform(-13.725,-7.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#BABABA").s().p("AANAWIAAgmIgZAAIAAAmIgGAAIAAgsIAlAAIAAAsg");
	this.shape_246.setTransform(-18.975,-7.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#BABABA").s().p("AgCAVQgFgDgDgFQgDgFgBgFIgMAAIAAATIgGAAIAAgsIAGAAIAAAUIAMAAQABgGADgFQADgFAFgCQAEgCAHgBQAHAAAFADQAGAEADAEQADAGAAAGQAAAHgDAFQgDAGgGADQgFACgHAAQgHAAgEgCgAAAgOIgFAGQgCAEAAAEQAAAFACAEQACAEADACQAEADAFAAQAFAAAEgDQAEgCACgEQACgEAAgFQAAgEgCgEQgCgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_247.setTransform(-27.625,-7.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#BABABA").s().p("AgMAVQgEgDgEgGQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAGAAQAHAAAFADQAFAEADAEQADAGAAAGQAAAHgDAFQgDAGgFADQgFACgHAAQgGAAgGgCgAgIgOQgEACgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEAAgFQAAgEgDgEQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_248.setTransform(-34.45,-7.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#BABABA").s().p("AAKAWIgTgUIgCAAIAAAUIgGAAIAAgsIAGAAIAAATIACAAIASgTIAIAAIgUAVIAVAXg");
	this.shape_249.setTransform(-39,-7.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_250.setTransform(-44.225,-7.125);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#BABABA").s().p("AgGALIAGgVIAHAAIgIAVg");
	this.shape_251.setTransform(-49.975,-4.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#BABABA").s().p("AgKAiQAFAAADgDQACgCACgFQABgFABgGIAAgNIAAgMQgBgGgBgFQgCgFgCgDQgDgCgFAAIAAgGQAGAAAEADQAEADACAGIAEANQABAHAAAHIgBAPQgBAHgDAGQgCAFgEAEQgEADgGAAg");
	this.shape_252.setTransform(-52.65,-7.65);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgEQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCQAFgCACgCIACAFIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_253.setTransform(-56.625,-7.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#BABABA").s().p("AgeAWIAAgsIAGAAIAAAnIAWAAIAAgnIAFAAIAAAnIAWAAIAAgnIAGAAIAAAsg");
	this.shape_254.setTransform(-63.125,-7.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_255.setTransform(-68.125,-8.075);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_256.setTransform(-71.975,-7.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAFgEACQgFADgFgBQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAADACADQADACAFAAIAGgBQADgCADgDQACgDAAgFIAAgEIgOACg");
	this.shape_257.setTransform(-77.375,-7.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#BABABA").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgCAEgBQAGAAAFADQAFAEADAEQADAGAAAHQAAAHgDAEQgDAGgFADQgFACgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgXQgDACgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEAAQAFAAAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgCgFAAQgEAAgEACg");
	this.shape_258.setTransform(-82.425,-6.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgEQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCQAFgCACgCIACAFIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_259.setTransform(-90.275,-7.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_260.setTransform(-95.575,-7.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAFgEACQgFADgFgBQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAADACADQADACAFAAIAGgBQADgCADgDQACgDAAgFIAAgEIgOACg");
	this.shape_261.setTransform(-100.975,-7.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_262.setTransform(-105.425,-7.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#BABABA").s().p("AgIAVQgFgEgDgFQgDgFAAgHQAAgGADgGQADgEAFgEQAGgDAGAAQAEABAEABIAHADIgDAGIgGgDIgGgBQgFAAgDACQgEABgCAFQgCAEAAAEQAAAFACAEQACAEAEACQADACAEABIAIgCQADgBADgDIACAGQgDACgEACQgEACgGgBQgFAAgFgCg");
	this.shape_263.setTransform(-109.65,-7.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAFgEACQgFADgFgBQgHABgEgEgAgBACQgGABgCABQgDACABAEQAAADACADQADACAFAAIAGgBQADgCADgDQACgDAAgFIAAgEIgOACg");
	this.shape_264.setTransform(-114.675,-7.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#BABABA").s().p("AANAWIAAgTIgZAAIAAATIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_265.setTransform(-119.825,-7.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#BABABA").s().p("AgLAVQgFgDgEgGQgCgFAAgHQAAgGACgGQAEgEAFgEQAFgDAGAAQAHAAAGADQAEAEAEAEQADAGAAAGQAAAHgDAFQgEAGgEADQgGACgHAAQgGAAgFgCgAgIgOQgEACgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEgBgFQABgEgDgEQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_266.setTransform(-127.55,-7.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#BABABA").s().p("AAdAdIAAgNIg/AAIAAgsIAGAAIAAAmIAWAAIAAgmIAGAAIAAAmIAWAAIAAgmIAGAAIAAAmIAHAAIAAATg");
	this.shape_267.setTransform(-133.975,-6.45);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#BABABA").s().p("AgGAKIAGgTIAHAAIgIATg");
	this.shape_268.setTransform(143.125,-14.45);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#BABABA").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgFQAEgGAFgCQAFgDAGAAQAHAAAGADQAEACAEAGQADAFAAAGQAAAHgDAFQgEAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_269.setTransform(139.3,-16.95);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#BABABA").s().p("AgMAXIAAgsIAZAAIAAAFIgTAAIAAAng");
	this.shape_270.setTransform(135.025,-16.95);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgCgFAAgHQAAgGACgFQAEgGAEgCQAGgDAGAAQAHAAAFADQAFACAEAGQACAFAAAGQAAAHgCAFQgEAFgFADQgFAEgHAAQgGAAgGgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQADgEAAgFQAAgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_271.setTransform(130.15,-16.95);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_272.setTransform(125.375,-16.95);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgSIADAAQADAAACgDQACgDAAgGIAEgbIAcAAIAAAnIAHAAIAAASgAgHAAIgBAGIgDAFIAXAAIAAghIgQAAg");
	this.shape_273.setTransform(118.45,-16.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_274.setTransform(114.775,-17.925);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAFQAAADgCADQgCACgDABQAFABADACQADADAAAEQAAAFgDADQgCADgDABQgEACgFAAgAgLARIAMAAQAFAAADgBQACgCAAgFQAAgDgDgCQgDgDgFAAIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgBgEgBIgKAAg");
	this.shape_275.setTransform(111.475,-16.95);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgEgFAAgHQAAgGAEgFQACgGAGgCQAFgDAGAAQAHAAAFADQAGACACAGQADAFABAGQgBAHgDAFQgCAFgGADQgFAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEADAEgBQAFABAEgDQAEgCACgEQACgEABgFQgBgFgCgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_276.setTransform(103.9,-16.95);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_277.setTransform(98.425,-16.95);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#BABABA").s().p("AAZAXIgUgWIgCAAIAAAWIgFAAIAAgWIgCAAIgUAWIgIAAIAXgYIgWgUIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAUIAWAYg");
	this.shape_278.setTransform(92.375,-16.95);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgDQAFgDAFAAQAHAAAEADQAFACADAGQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAEAHAAQAFABAEgCQAFgCACgDIACAGIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgHIgFgGQgEgBgEAAIgGABIgFAGIgDAHIAdAAIAAAAg");
	this.shape_279.setTransform(86.525,-16.95);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#BABABA").s().p("AgUAXIgCgBIABgGIACABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgHAAIAAgmIgSAAIgCAbQgBAGgDADQgDADgEAAIgFAAg");
	this.shape_280.setTransform(80.9,-16.925);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMAAIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCAEgEACQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgCADgCQACgEAAgEIAAgFIgOABg");
	this.shape_281.setTransform(75.925,-16.95);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#BABABA").s().p("AgLAWIgHgEIACgFIAHADIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgCQAEgDAAgDQAAgEgDgCQgCgBgFAAIgHABIgGADIgCgGIAHgCIAIgBQAIAAAEADQAEADABAFQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDACQgCADgEACQgFABgFABQgGgBgFgBg");
	this.shape_282.setTransform(71.125,-16.95);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#BABABA").s().p("AAAAkQgDgDgCgFQgDgGgBgHIgBgPIABgOQABgHADgGQACgGAEgDQAEgCAGAAIAAAEQgFABgDADQgDADgBAEIgCALIgBAMIABANIACALQABAFADADQADACAFAAIAAAFQgHAAgEgDg");
	this.shape_283.setTransform(67.5,-17.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#BABABA").s().p("AgRAgIgCgBIAAgFIACAAIABAAQAEAAADgCQACgCADgFIADgGIgUgqIAHAAIAPAiIAOgiIAGAAIgUAyQgCAHgEADQgEADgGAAIgCAAg");
	this.shape_284.setTransform(61.5,-15.975);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#BABABA").s().p("AgMAXIAAgsIAZAAIAAAFIgTAAIAAAng");
	this.shape_285.setTransform(57.825,-16.95);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_286.setTransform(54.625,-17.925);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#BABABA").s().p("AgHAhQgFgBgDgEQgEgEgBgHIgDgRQAAgJADgHQADgHAFgEQAFgDAIgCIADAAIADgBIAFAAIAEAAIADgBIABAGIgHABIgFAAIgCAAIgDABIgKADQgEACgCAFQgCAFgBAJQADgEAFgCQAFgDAFAAQAGAAAFADQAFADACAFQADAEABAHQgBAHgDAFQgCAGgGADQgEADgIAAQgDAAgEgCgAgGgEIgFAEIgFAFQABAJACAFQACAGAEACQAEACADAAQAFAAAFgCQADgDACgEQACgEAAgFQAAgFgCgEQgCgDgDgCQgEgCgFAAQgDAAgEABg");
	this.shape_287.setTransform(50.8,-18.075);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#BABABA").s().p("AgLAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgGAFgCQAFgDAGAAQAHAAAGADQAEACAEAGQADAFAAAGQAAAHgDAFQgEAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_288.setTransform(45.25,-16.95);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgFAFgDQAFgCAEAAQAGAAAFADQAFACADAGQADAFAAAHQAAAHgDAEQgDAFgFADQgFAEgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_289.setTransform(39.875,-16.05);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#BABABA").s().p("AANAXIAAgnIgZAAIAAAnIgGAAIAAgsIAlAAIAAAsg");
	this.shape_290.setTransform(34.125,-16.95);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#BABABA").s().p("AATAXIAAgjIgRAcIgEAAIgQgcIAAAjIgGAAIAAgsIAHAAIARAeIASgeIAHAAIAAAsg");
	this.shape_291.setTransform(25.875,-16.95);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#BABABA").s().p("AAKAXIgTgWIgCAAIAAAWIgGAAIAAgsIAGAAIAAATIACAAIASgTIAIAAIgUAUIAVAYg");
	this.shape_292.setTransform(20.75,-16.95);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#BABABA").s().p("AgDADIgBgDIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_293.setTransform(14.675,-15.075);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#BABABA").s().p("AgIAUQgFgDgCgEQgEgGAAgHQAAgGAEgFQACgGAFgCQAGgDAGAAQAEAAAEABIAHADIgDAGIgFgEIgHgBQgEAAgEACQgEADgCADQgCAEAAAFQAAAFACAEQACAEAEADQADABAEAAIAIgBQADgBADgCIADAFQgDADgFABQgEABgFABQgGAAgFgEg");
	this.shape_294.setTransform(11.15,-16.95);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#BABABA").s().p("AAOAXIAAgkIgcAkIgGAAIAAgsIAGAAIAAAjIAcgjIAHAAIAAAsg");
	this.shape_295.setTransform(5.95,-16.95);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_296.setTransform(1.075,-16.95);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#BABABA").s().p("AgMAdQgEgFgCgHQgCgIAAgJQAAgIACgHQACgIAEgFQAFgEAHAAQAIAAAFAEQAEAFACAIQACAHAAAIQAAAJgCAIQgCAHgEAFQgFAEgIAAQgHAAgFgEgAgIgWQgDADgBAHIgBAMIABANQABAGADAEQADADAFABQAGgBADgDQADgEABgGIABgNIgBgMQgBgHgDgDQgDgEgGABQgFgBgDAEg");
	this.shape_297.setTransform(-5.73,-17.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#BABABA").s().p("AgJAeQgFgDgDgGQgDgHgBgJQABgGACgHQACgHAEgFQAFgGAHgDQAGgDAKAAIACAGQgLAAgHADQgGAEgEAGQgDAGAAAHQACgDAEgDQAEgCAFAAQAGAAAEADQAFACACAEQACAFABAGQgBAFgCAFQgDAFgEADQgFADgGAAQgFAAgFgDgAgFgBIgGADIgDAFQAAAHACAEQADAFADACQADACAEAAQAEAAADgCQAEgCACgEQABgDAAgEQAAgFgBgDQgCgEgEAAQgDgCgEAAIgGABg");
	this.shape_298.setTransform(-10.9,-17.875);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#BABABA").s().p("AAEAgIAAg2IgOAKIAAgHIARgMIAEAAIAAA/g");
	this.shape_299.setTransform(-15.85,-17.925);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#BABABA").s().p("AAOAXIAAgkIgbAkIgHAAIAAgsIAHAAIAAAjIAbgjIAHAAIAAAsg");
	this.shape_300.setTransform(-22.5,-16.95);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#BABABA").s().p("AANAXIAAgSIgGACQgDACgFgBQgFAAgEgBQgEgCgCgFQgCgCAAgHIAAgMIAGAAIAAALQAAAHADADQAEADAFAAIAHgBIAGgCIAAgVIAGAAIAAAsg");
	this.shape_301.setTransform(-28.025,-16.95);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAFQAAADgCADQgCACgDABQAFABADACQADADAAAEQAAAFgDADQgCADgDABQgEACgFAAgAgLARIAMAAQAFAAADgBQACgCAAgFQAAgDgDgCQgDgDgFAAIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgBgEgBIgKAAg");
	this.shape_302.setTransform(-35.025,-16.95);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_303.setTransform(-38.675,-17.925);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#BABABA").s().p("AAKAXIgTgWIgCAAIAAAWIgGAAIAAgsIAGAAIAAATIACAAIASgTIAIAAIgUAUIAVAYg");
	this.shape_304.setTransform(-41.6,-16.95);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#BABABA").s().p("AgMAUQgEgDgDgFQgEgFAAgHQAAgGAEgFQADgGAEgCQAGgDAGAAQAHAAAFADQAGACACAGQADAFAAAGQAAAHgDAFQgCAFgGADQgFAEgHAAQgGAAgGgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQACgEABgFQgBgFgCgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_305.setTransform(-46.95,-16.95);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#BABABA").s().p("AgWAhIAAg/IAGAAIAAAJQADgFAFgDQAFgCAEAAQAGAAAFADQAFACADAGQADAFAAAHQAAAHgDAEQgDAFgFADQgFAEgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_306.setTransform(-52.325,-16.05);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#BABABA").s().p("AgMAdQgEgFgCgHQgCgIAAgJQAAgIACgHQACgIAEgFQAFgEAHAAQAIAAAFAEQAEAFACAIQACAHAAAIQAAAJgCAIQgCAHgEAFQgFAEgIAAQgHAAgFgEgAgIgWQgDADgBAHIgBAMIABANQABAGADAEQADADAFABQAGgBADgDQADgEABgGIABgNIgBgMQgBgHgDgDQgDgEgGABQgFgBgDAEg");
	this.shape_307.setTransform(-60.23,-17.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#BABABA").s().p("AADAgIAAg2IgMAKIAAgHIARgMIACAAIAAA/g");
	this.shape_308.setTransform(-65.2,-17.925);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#BABABA").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgFQAEgGAFgCQAFgDAGAAQAHAAAGADQAEACAEAGQADAFAAAGQAAAHgDAFQgEAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_309.setTransform(-71.75,-16.95);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgSIADAAQADAAACgDQACgDAAgGIAEgbIAcAAIAAAnIAHAAIAAASgAgHAAIgBAGIgDAFIAWAAIAAghIgQAAg");
	this.shape_310.setTransform(-77.2,-16.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#BABABA").s().p("AgQAXIAAgsIAGAAIAAATIALAAQAIAAAEACQAEACAAAHQAAAFgCACQgCADgDACQgEACgEAAgAgKARIALAAQAFABADgDQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_311.setTransform(-84.175,-16.95);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#BABABA").s().p("AgUAXIgCgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgHAAIAAgmIgSAAIgCAbQgBAGgDADQgDADgFAAIgEAAg");
	this.shape_312.setTransform(-89.75,-16.925);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_313.setTransform(-93.125,-17.925);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#BABABA").s().p("AgIAhQgEgBgDgEQgDgEgCgHIgCgRQAAgJACgHQADgHAFgEQAFgDAIgCIAEAAIACgBIAFAAIAEAAIADgBIABAGIgGABIgGAAIgCAAIgDABIgKADQgEACgCAFQgCAFgBAJQADgEAFgCQAFgDAFAAQAGAAAFADQAFADADAFQADAEAAAHQAAAHgDAFQgDAGgFADQgGADgHAAQgDAAgFgCgAgFgEIgGAEIgFAFQABAJACAFQACAGAEACQAEACADAAQAGAAADgCQAEgDACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgDgCgFAAQgDAAgDABg");
	this.shape_314.setTransform(-96.95,-18.075);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#BABABA").s().p("AgMAUQgEgDgEgFQgDgFAAgHQAAgGADgFQAEgGAEgCQAGgDAGAAQAHAAAFADQAFACAEAGQACAFAAAGQAAAHgCAFQgEAFgFADQgFAEgHAAQgGAAgGgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQADgEAAgFQAAgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_315.setTransform(-102.5,-16.95);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#BABABA").s().p("AATAXIAAgjIgRAcIgEAAIgQgcIAAAjIgGAAIAAgsIAHAAIARAeIASgeIAHAAIAAAsg");
	this.shape_316.setTransform(-108.525,-16.95);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#BABABA").s().p("AgLAUQgGgDgCgFQgDgFAAgHQAAgGADgFQACgGAGgCQAFgDAGAAQAHAAAGADQAEACADAGQAEAFAAAGQAAAHgEAFQgDAFgEADQgGAEgHAAQgGAAgFgEgAgIgPQgEADgCADQgCAEAAAFQAAAFACAEQACAEAEACQAEADAEgBQAFABAEgDQAEgCACgEQADgEgBgFQABgFgDgEQgCgDgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_317.setTransform(-114.6,-16.95);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#BABABA").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_318.setTransform(-119.375,-16.95);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#BABABA").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAFQAAADgCADQgCACgDABQAFABADACQADADAAAEQAAAFgDADQgCADgDABQgEACgFAAgAgLARIAMAAQAFAAADgBQACgCAAgFQAAgDgDgCQgDgDgFAAIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgBgEgBIgKAAg");
	this.shape_319.setTransform(-123.525,-16.95);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMAAIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCAEgEACQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgCADgCQACgEAAgEIAAgFIgOABg");
	this.shape_320.setTransform(-128.775,-16.95);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMAAIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCAEgEACQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgCADgCQACgEAAgEIAAgFIgOABg");
	this.shape_321.setTransform(-136.125,-16.95);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#BABABA").s().p("AANAXIAAgVIgZAAIAAAVIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_322.setTransform(-141.275,-16.95);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#BABABA").s().p("AgBASIAOgSIgOgRIAHAAIAOARIgOASgAgTASIAPgSIgPgRIAHAAIAOARIgOASg");
	this.shape_323.setTransform(129.55,-26.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_324.setTransform(124.625,-26.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#BABABA").s().p("AgEAbQgDgDAAgGIAAgbIgGAAIAAgGIAGAAIAAgNIAGgBIAAAOIANAAIAAAGIgNAAIAAAaQAAAEABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAEgBIAEgBIABAFIgEACIgGABQgFAAgDgDg");
	this.shape_325.setTransform(120.775,-27.475);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#BABABA").s().p("AgMAUQgEgCgEgGQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAGAAQAHAAAFADQAFAEADAEQADAGAAAGQAAAHgDAFQgDAGgFACQgFADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEAAgFQAAgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_326.setTransform(116.3,-26.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#BABABA").s().p("AgRAgIgDgBIABgFIABAAIACAAQAEAAADgCQADgCACgFIADgGIgTgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgFAAIgDAAg");
	this.shape_327.setTransform(111.4,-25.825);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#BABABA").s().p("AgMAUQgEgCgDgGQgEgFAAgHQAAgGAEgGQADgEAEgEQAGgDAGAAQAHAAAFADQAGAEACAEQADAGAAAGQAAAHgDAFQgCAGgGACQgFADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEABgFQgBgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_328.setTransform(106.5,-26.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#BABABA").s().p("AgCAgIAAg5IgSAAIAAgGIApAAIAAAGIgSAAIAAA5g");
	this.shape_329.setTransform(101.45,-27.75);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDABgFIADgcIAcAAIAAAmIAHAAIAAATgAgHAAIgCAHIgCADIAWAAIAAghIgPAAg");
	this.shape_330.setTransform(94.2,-26.15);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_331.setTransform(90.525,-27.775);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEADAAAEQAAAEgCADQgCACgDACQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEACgFgBgAgLASIAMAAQAFAAADgDQACgCAAgDQAAgFgDgCQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_332.setTransform(87.225,-26.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_333.setTransform(79.775,-26.825);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_334.setTransform(76.625,-27.775);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_335.setTransform(73.475,-26.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_336.setTransform(68.775,-26.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_337.setTransform(63.375,-26.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#BABABA").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgCAEgBQAGAAAFADQAFAEADAEQADAGAAAHQAAAHgDAEQgDAGgFACQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEAAQAFAAAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_338.setTransform(58.325,-25.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_339.setTransform(52.575,-26.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#BABABA").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_340.setTransform(48.625,-26.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_341.setTransform(41.575,-26.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_342.setTransform(36.425,-26.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#BABABA").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgGAFgDQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCIAHgFIACAGIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_343.setTransform(31.175,-26.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#BABABA").s().p("AAZAWIgUgUIgCAAIAAAUIgFAAIAAgUIgCAAIgUAUIgIAAIAXgWIgWgWIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAWIAWAWg");
	this.shape_344.setTransform(25.275,-26.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEADAAAEQAAAEgCADQgCACgDACQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEACgFgBgAgLASIAMAAQAFAAADgDQACgCAAgDQAAgFgDgCQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_345.setTransform(19.775,-26.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#BABABA").s().p("AgLAUQgGgCgCgGQgDgFgBgHQABgGADgGQACgEAGgEQAFgDAGAAQAHAAAFADQAGAEACAEQAEAGAAAGQAAAHgEAFQgCAGgGACQgFADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEAAgFQAAgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_346.setTransform(14.45,-26.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#BABABA").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDABgFIADgcIAcAAIAAAmIAHAAIAAATgAgHAAIgCAHIgCADIAXAAIAAghIgQAAg");
	this.shape_347.setTransform(9,-26.15);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#BABABA").s().p("AgLAUQgGgCgCgGQgDgFgBgHQABgGADgGQACgEAGgEQAFgDAGAAQAHAAAFADQAGAEACAEQAEAGAAAGQAAAHgEAFQgCAGgGACQgFADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEABgFQgBgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_348.setTransform(3.65,-26.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#BABABA").s().p("AASAgIAAg5IgjAAIAAA5IgGAAIAAg/IAvAAIAAA/g");
	this.shape_349.setTransform(-2.425,-27.75);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#BABABA").s().p("AANASIgOgSIAOgRIAIAAIgQARIAQASgAgFASIgPgSIAPgRIAHAAIgPARIAPASg");
	this.shape_350.setTransform(-8,-26.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_351.setTransform(-15.175,-26.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_352.setTransform(-20.875,-26.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_353.setTransform(-26.875,-26.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#BABABA").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgCAEgBQAGAAAFADQAFAEADAEQADAGAAAHQAAAHgDAEQgDAGgFACQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEAAQAFAAAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_354.setTransform(-31.925,-25.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#BABABA").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_355.setTransform(-36.525,-26.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#BABABA").s().p("AgMAUQgFgCgDgGQgCgFAAgHQAAgGACgGQADgEAFgEQAGgDAGAAQAHAAAGADQAFAEADAEQACAGAAAGQAAAHgCAFQgDAGgFACQgGADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEAAgFQAAgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_356.setTransform(-41.4,-26.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#BABABA").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgCAEgBQAGAAAFADQAFAEADAEQADAGAAAHQAAAHgDAEQgDAGgFACQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEAAQAFAAAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_357.setTransform(-46.775,-25.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#BABABA").s().p("AANAWIAAgmIgZAAIAAAmIgGAAIAAgsIAlAAIAAAsg");
	this.shape_358.setTransform(-52.525,-26.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#BABABA").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_359.setTransform(-58.575,-27.775);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#BABABA").s().p("AgLAWIgHgDIACgHIAHAEIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIgFgCIgLgBIAAgFQAIAAAEgCQAEgCAAgDQAAgDgDgCQgCgCgFAAIgHABIgGADIgCgFIAHgEIAIgBQAIAAAEADQAEADABAGQAAAEgDADQgDADgGABIAHABQADABACACQACADAAAEQAAADgDAEQgCADgEABQgFABgFAAQgGAAgFgBg");
	this.shape_360.setTransform(-62.075,-26.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_361.setTransform(-66.925,-26.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#BABABA").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEADAAAEQAAAEgCADQgCACgDACQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEACgFgBgAgLASIAMAAQAFAAADgDQACgCAAgDQAAgFgDgCQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_362.setTransform(-71.525,-26.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#BABABA").s().p("AgRAgIgDgBIABgFIABAAIACAAQAEAAADgCQADgCACgFIACgGIgSgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgFAAIgDAAg");
	this.shape_363.setTransform(-76.25,-25.825);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_364.setTransform(-83.325,-26.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#BABABA").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_365.setTransform(-88.475,-26.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#BABABA").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_366.setTransform(-96.075,-26.825);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#BABABA").s().p("AgIAUQgFgDgDgFQgCgFAAgHQAAgGACgGQADgEAFgEQAFgDAGAAQAFABAEABIAHADIgCAGIgHgDIgHgBQgEAAgDABQgEACgCAFQgCAEAAAEQAAAFACAEQACAEADACQAEADAEAAIAIgCQAEgBADgDIABAGQgDACgEACQgEABgGAAQgFAAgFgDg");
	this.shape_367.setTransform(-100.4,-26.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#BABABA").s().p("AgQAWIAAgsIAGAAIAAATIALAAQAIAAAEADQAEADAAAGQAAAFgCADQgCACgDACQgEACgEgBgAgKASIALAAQAFAAADgDQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_368.setTransform(-104.875,-26.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#BABABA").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_369.setTransform(-109.425,-26.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#BABABA").s().p("AgHAUQgGgCgCgGQgDgFAAgHQAAgGADgGQACgEAFgEQAFgDAGAAQAFABAEABIAHADIgCAFIgGgCQgDgCgFAAQgGAAgEAEQgEAEgBAHIAZAAIAAAEIgZAAQAAAFADAEQACADADABQAEADADAAIAIgBIAHgEIACAGIgIADQgEABgFAAQgFAAgFgDg");
	this.shape_370.setTransform(-113.65,-26.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#BABABA").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_371.setTransform(-118.675,-26.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#BABABA").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_372.setTransform(-124.375,-26.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#BABABA").s().p("AAAAEIgGAKIgEgDIAIgJIgMgCIACgGIALAFIgBgMIAFAAIgBAMIALgFIACAGIgMACIAIAJIgFADg");
	this.shape_373.setTransform(-129.45,-29.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-37,302.6,75.9);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3941").s().p("AAgA5IAAgWIhAAAIAAAWIgLAAIAAgiIAGAAQAKAAABgVIAHg6IAzAAIAABPIAMAAIAAAigAgNADQgCARgFADIAnAAIAAhDIgaAAg");
	this.shape.setTransform(-0.031,-0.0048,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-4,6.2,8.1);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3941").s().p("AghAiQgOgNAAgVQAAgUAOgNQANgNAUAAQAVAAAOANQANANAAAUQAAAVgNANQgOANgVAAQgUAAgNgNgAgXgYQgKAKAAAOQAAAPAKAKQAJAKAOAAQAPAAAKgKQAKgKAAgPQAAgOgKgKQgKgKgPAAQgOAAgJAKg");
	this.shape.setTransform(-0.0128,0.0161,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-3.3,6.8,6.699999999999999);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3941").s().p("AgdAuIAAhbIAdAAQANAAAJAIQAIAIAAANQAAAMgIAIQgJAJgNAAIgQAAIAAAhgAgQABIAOAAQAHAAAFgDQAGgGAAgIQAAgSgSAAIgOAAg");
	this.shape.setTransform(0.0186,-0.0339,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-3.3,4.300000000000001,6.6);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3941").s().p("AghAiQgOgNAAgVQAAgUAOgNQANgNAUAAQAVAAAOANQANANAAAUQAAAVgNANQgOANgVAAQgUAAgNgNgAgXgYQgKAKAAAOQAAAPAKAKQAJAKAOAAQAPAAAKgKQAKgKAAgPQAAgOgKgKQgKgKgPAAQgOAAgJAKg");
	this.shape.setTransform(0.0116,0.0161,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-3.3,6.9,6.699999999999999);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3941").s().p("AAUAuIgigpIgIAAIAAApIgNAAIAAhbIANAAIAAApIAHAAIAggpIAQAAIgkAsIAnAvg");
	this.shape.setTransform(-0.0014,-0.0339,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-3.3,5.2,6.6);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3941").s().p("AgFAuIAAhbIALAAIAABbg");
	this.shape.setTransform(0.019,-0.0339,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-3.3,0.9,6.6);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3941").s().p("AgeAuIAAhbIAdAAQALAAAIAGQAHAHABAKQgBAPgMAGQASADAAASQAAAMgHAHQgIAHgOAAgAgRAjIARAAQARAAAAgQQAAgOgPAAIgTAAgAgRgFIAPAAQAGAAAFgEQAEgEAAgHQAAgOgQAAIgOAAg");
	this.shape.setTransform(0.0186,-0.0339,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-3.3,4.4,6.6);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AhBBnIAAjNIA5AAQAcAAAQAOQAQAOABAZQAAAOgHALQgGAMgPAIQATAEALANQALAMAAAUQAAASgHANQgIAMgOAIQgOAHgUAAgAgsBUIAtAAQAVAAALgLQALgLAAgSQAAgRgLgJQgKgJgTgBIgwAAgAgsgJIAmAAQALAAAIgGQAJgFAFgIQAFgJAAgKQAAgRgLgJQgLgJgTgBIgjAAg");
	this.shape.setTransform(192.775,2.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBnIAAjNIAVAAIAADNg");
	this.shape_1.setTransform(179.025,2.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AgrBhQgSgIgLgMIAMgRQAGAHAJAGQAJAGALAEQALADAOAAQAXAAAOgLQAOgLAAgTQAAgVgSgKQgRgKgkAAIAAgRQAZAAAOgGQAOgGAFgJQAFgJAAgJQAAgQgMgJQgLgJgTAAQgRABgNAGQgNAGgKAIIgJgRQAKgKARgGQAQgHATAAQATAAAOAGQAOAGAJAMQAHALABAQQgBATgMANQgLAMgTAEQAYAEANAMQANAMABAXQAAASgJAOQgIANgRAIQgQAIgXAAQgZAAgSgJg");
	this.shape_2.setTransform(166.05,2.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("ABEBnIgZhDIhVAAIgZBDIgXAAIBQjNIAVAAIBPDNgAAkASIgkhfIgkBfIBIAAg");
	this.shape_3.setTransform(148.2,2.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AAyBnIhUheIgUAAIAABeIgVAAIAAjNIAVAAIAABdIASAAIBOhdIAZAAIhUBkIBdBpg");
	this.shape_4.setTransform(130.775,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("Ag2BcQgYgNgOgZQgOgXAAgfQAAgeAOgYQAOgYAYgNQAYgOAeAAQAfAAAYAOQAYANAOAYQAOAYAAAeQAAAegOAYQgOAZgYANQgYANgfABQgegBgYgNgAgrhJQgTALgLATQgLATAAAYQAAAYALAUQALATATALQATALAYAAQAZAAATgLQATgLALgTQALgUAAgYQAAgYgLgTQgLgTgTgLQgTgLgZAAQgYAAgTALg");
	this.shape_5.setTransform(107.525,2.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("ABIB/IAAgwIiPAAIAAAwIgUAAIAAhEIAMAAQAGAAAFgGQAFgHAEgLQAEgLABgOIAPiIIBrAAIAAC5IAYAAIAABEgAghALQgCAUgEAMQgEANgGADIBfAAIAAilIhBAAg");
	this.shape_6.setTransform(84.725,5.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AgkBcQgZgNgOgYQgNgXAAggQAAgfANgYQAOgXAYgNQAYgNAegBQAVAAARAGQASAHANAKIgIAUQgMgLgQgGQgPgFgSAAQgXAAgSAKQgSAJgLARQgLASgDAWIByAAIAAASIhxAAQACAXAMARQALARASAJQASAKAWAAQAUAAARgHQAQgGANgLIAHAUQgRAMgRAGQgSAGgUAAQgfgBgXgNg");
	this.shape_7.setTransform(57.35,2.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("Ag3BnQgIgBgHgDIAFgTIALADQAHACAGAAQANAAAJgIQAHgGAHgQIhRifIAYAAIBDCJIA6iJIAYAAIhGCeQgGAPgHAMQgGALgLAGQgKAHgRgBIgPgBg");
	this.shape_8.setTransform(37.75,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AhCBnIAAjNIBsAAIAAAUIhXAAIAABEIAtAAQAjABAPAOQARAPAAAbQAAARgIAOQgHAOgOAIQgPAHgXAAgAgtBUIArAAQAXAAAMgLQALgKAAgUQAAgUgMgJQgMgKgWAAIgrAAg");
	this.shape_9.setTransform(20.6,2.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("Ag5BnIAAjNIBwAAIAAAUIhaAAIAABJIBYAAIAAASIhYAAIAABKIBcAAIAAAUg");
	this.shape_10.setTransform(2.9,2.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("Ag+BnIAAjNIA5AAQAVABAQAHQAPAIAIAOQAIAOAAAUQAAARgIAOQgIAOgPAKQgQAJgVAAIgkAAIAABNgAgpAHIAhAAQANAAALgGQAMgEAGgKQAHgLAAgOQAAgRgHgKQgGgJgMgFQgLgEgNAAIghAAg");
	this.shape_11.setTransform(-13.425,2.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBnIAAi5Ig6AAIAAgUICHAAIAAAUIg4AAIAAC5g");
	this.shape_12.setTransform(-30.325,2.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("Ag2BcQgYgNgOgZQgOgXAAgfQAAgeAOgYQAOgYAYgNQAYgOAeAAQAfAAAYAOQAYANAOAYQAOAYAAAeQAAAegOAYQgOAZgYANQgYANgfABQgegBgYgNgAgrhJQgTALgLATQgLATAAAYQAAAYALAUQALATATALQATALAYAAQAZAAATgLQATgLALgTQALgUAAgYQAAgYgLgTQgLgTgTgLQgTgLgZAAQgYAAgTALg");
	this.shape_13.setTransform(-50.525,2.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AA5BnIAAi5IhxAAIAAC5IgVAAIAAjNICbAAIAADNg");
	this.shape_14.setTransform(-74,2.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-22.7,307.5,45.4);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("Ag4BnIAAjNIBvAAIAAAUIhaAAIAABJIBXAAIAAASIhXAAIAABKIBdAAIAAAUg");
	this.shape.setTransform(62.35,2.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AA6BnIAAhdIh0AAIAABdIgVAAIAAjNIAVAAIAABdIB0AAIAAhdIAWAAIAADNg");
	this.shape_1.setTransform(42.6,2.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("ABEBnIgahDIhUAAIgZBDIgXAAIBPjNIAXAAIBPDNgAAkASIgkhfIgkBfIBIAAg");
	this.shape_2.setTransform(14.4,2.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AAyBnIhUheIgUAAIAABeIgVAAIAAjNIAVAAIAABdIASAAIBOhdIAZAAIhUBkIBdBpg");
	this.shape_3.setTransform(-3.025,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AAyBnIAAhWIgnAAIgCAAIgDAAIgzBWIgaAAIA5haQgRgIgKgOQgKgPAAgTQAAgbASgQQARgQAdAAIA7AAIAADNgAgGhPQgKAEgGAJQgHAJAAAOQAAAPAGAKQAGAJAKAFQAJADALABIAlAAIAAhTIgjAAQgMAAgJAEg");
	this.shape_4.setTransform(-23.875,2.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAiIAXhDIAWAAIgaBDg");
	this.shape_5.setTransform(-44.375,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AhCBnIAAjNIAWAAIAABYIAtAAQAhABAQAOQARAPAAAbQAAARgIAOQgGAOgPAIQgPAHgWAAgAgsBUIArAAQAWAAALgLQAMgKABgUQAAgUgNgJQgNgKgUAAIgrAAg");
	this.shape_6.setTransform(-55.95,2.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("ABHB/IAAgwIihAAIAAjNIAWAAIAAC5IBxAAIAAi5IAWAAIAAC5IAYAAIAABEg");
	this.shape_7.setTransform(-75.625,5.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBnIAAjNIAVAAIAADNg");
	this.shape_8.setTransform(-91.825,2.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("ABJBnIAAiuIhBBjIgQAAIhAhjIAACuIgWAAIAAjNIAZAAIBFBpIBHhpIAYAAIAADNg");
	this.shape_9.setTransform(-108.4,2.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-22.7,195.5,45.4);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgDADIgBgDIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape.setTransform(299.625,-265.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgGgCgCgGQgDgFAAgHQAAgGADgGQACgEAGgEQAFgDAGAAQAHAAAGADQAEAEADAEQAEAGAAAGQAAAHgEAFQgDAGgEACQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEgBgFQABgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_1.setTransform(295.8,-267.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_2.setTransform(290.525,-267.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgIAUQgFgDgCgFQgEgFAAgHQAAgGAEgGQACgEAGgEQAEgDAHAAQAEABAEABIAHADIgDAGIgFgDIgHgBQgEAAgEABQgEACgCAFQgCAEAAAEQAAAFACAEQACAEAEACQADADAEAAIAIgCQADgBADgDIADAGQgEACgEACQgEABgFAAQgGAAgFgDg");
	this.shape_3.setTransform(285.75,-267.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_4.setTransform(280.925,-267.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AANAWIAAgSIgGADQgDACgFAAQgFAAgEgDQgEgCgCgDQgCgDAAgGIAAgOIAGAAIAAANQAAAGADADQAEADAFAAIAHgBIAGgCIAAgWIAGAAIAAAsg");
	this.shape_5.setTransform(276.025,-267.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAUQgFgCgDgGQgCgFAAgHQAAgGACgGQADgEAFgEQAGgDAGAAQAHAAAGADQAFAEADAEQACAGAAAGQAAAHgCAFQgDAGgFACQgGADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEAAgFQAAgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_6.setTransform(270.9,-267.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_7.setTransform(265.625,-267.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDAAgFIAEgcIAcAAIAAAmIAHAAIAAATgAgHAAIgBAHIgDADIAWAAIAAghIgQAAg");
	this.shape_8.setTransform(260.4,-266.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAUQgEgCgEgGQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAGAAQAHAAAGADQAEAEAEAEQACAGAAAGQAAAHgCAFQgEAGgEACQgGADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEAAgFQAAgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_9.setTransform(255.25,-267.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgGgCgCgGQgEgFAAgHQAAgGAEgGQACgEAGgEQAFgDAGAAQAHAAAFADQAGAEACAEQADAGABAGQgBAHgDAFQgCAGgGACQgFADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEABgFQgBgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_10.setTransform(247.9,-267.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgHAhQgFgBgDgEQgEgEgCgHIgBgRQAAgJACgHQACgHAGgEQAFgDAJgCIACAAIADgBIAFAAIAEAAIADgBIABAGIgHABIgFAAIgDAAIgCABIgJADQgFACgCAFQgDAFAAAJQADgEAFgCQAEgDAGAAQAGAAAFADQAFADADAFQACAEAAAHQAAAHgCAFQgDAGgGADQgEADgHAAQgFAAgDgCgAgFgEIgHAEIgEAFQAAAJADAFQADAGADACQAEACAEAAQAEAAAFgCQADgDACgEQACgEAAgFQAAgFgCgEQgCgDgDgCQgEgCgFAAQgDAAgDABg");
	this.shape_11.setTransform(242.65,-268.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_12.setTransform(237.375,-267.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgGgCgCgGQgEgFAAgHQAAgGAEgGQACgEAGgEQAFgDAGAAQAHAAAFADQAGAEACAEQADAGABAGQgBAHgDAFQgCAGgGACQgFADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEABgFQgBgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_13.setTransform(230.35,-267.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_14.setTransform(224.525,-267.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgEQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCQAFgCACgDIACAGIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_15.setTransform(218.875,-267.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgCAEgBQAGAAAFADQAFAEADAEQADAGAAAHQAAAHgDAEQgDAGgFACQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEAAQAFAAAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_16.setTransform(213.875,-266.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AAKAWIgTgUIgCAAIAAAUIgGAAIAAgsIAGAAIAAATIADAAIARgTIAIAAIgVAWIAWAWg");
	this.shape_17.setTransform(209.2,-267.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAUQgEgCgEgGQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAGAAQAHAAAFADQAFAEADAEQADAGAAAGQAAAHgDAFQgDAGgFACQgFADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQADAEADACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEAAgFQAAgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_18.setTransform(204.05,-267.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAWIgPgTIgNATIgHAAIASgWIgRgWIAIAAIALARIAOgRIAGAAIgQAWIARAWg");
	this.shape_19.setTransform(197.15,-267.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAgIgDgBIABgFIABAAIADAAQADAAADgCQACgCADgFIACgGIgSgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgFAAIgDAAg");
	this.shape_20.setTransform(192.95,-266.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgCAEgBQAGAAAFADQAFAEADAEQADAGAAAHQAAAHgDAEQgDAGgFACQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEAAQAFAAAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_21.setTransform(188.375,-266.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAgIgCgBIAAgFIACAAIABAAQAEAAADgCQADgCACgFIADgGIgTgqIAGAAIAPAiIAOgiIAGAAIgVAyQgBAHgEADQgEADgGAAIgCAAg");
	this.shape_22.setTransform(181.3,-266.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AgQAWIAAgsIAGAAIAAATIALAAQAIAAAEADQAEADAAAGQAAAEgCAEQgCACgDACQgEACgEgBgAgKASIALAAQAFAAADgDQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_23.setTransform(175.175,-267.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("AgTAXIgDgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgHAAIAAgmIgRAAIgDAbQgCAGgCADQgDADgFAAIgDAAg");
	this.shape_24.setTransform(169.8,-267.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_25.setTransform(166.625,-268.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("AgHAhQgFgBgDgEQgEgEgCgHIgCgRQABgJACgHQACgHAGgEQAFgDAJgCIACAAIADgBIAFAAIAEAAIADgBIABAGIgHABIgFAAIgDAAIgCABIgJADQgFACgCAFQgDAFAAAJQADgEAFgCQAEgDAGAAQAGAAAFADQAFADADAFQACAEAAAHQAAAHgCAFQgDAGgFADQgFADgHAAQgFAAgDgCgAgFgEIgHAEIgEAFQAAAJADAFQADAGADACQAEACAEAAQAEAAAFgCQADgDACgEQACgEAAgFQAAgFgCgEQgCgDgDgCQgEgCgFAAQgDAAgDABg");
	this.shape_26.setTransform(163,-268.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgGgCgCgGQgDgFAAgHQAAgGADgGQACgEAGgEQAFgDAGAAQAHAAAGADQAEAEADAEQAEAGAAAGQAAAHgEAFQgDAGgEACQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEgBgFQABgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_27.setTransform(157.65,-267.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_28.setTransform(151.825,-267.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgGgCgCgGQgDgFAAgHQAAgGADgGQACgEAGgEQAFgDAGAAQAHAAAGADQAEAEADAEQAEAGAAAGQAAAHgEAFQgDAGgEACQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEgBgFQABgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_29.setTransform(145.95,-267.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_30.setTransform(141.375,-267.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEADAAAEQAAAEgCADQgCACgDACQAFAAADACQADACAAAGQAAAEgDADQgCADgDABQgEACgFgBgAgLASIAMAAQAFAAADgDQACgCAAgDQAAgEgDgDQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_31.setTransform(137.425,-267.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_32.setTransform(132.375,-267.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAWIAAgjIgcAjIgGAAIAAgsIAGAAIAAAjIAcgjIAFAAIAAAsg");
	this.shape_33.setTransform(125.25,-267.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_34.setTransform(120.575,-267.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.902)").s().p("AAOAWIAAgjIgcAjIgFAAIAAgsIAFAAIAAAjIAcgjIAGAAIAAAsg");
	this.shape_35.setTransform(115.95,-267.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.902)").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDABgFIADgcIAcAAIAAAmIAHAAIAAATgAgHAAIgCAHIgCADIAXAAIAAghIgQAAg");
	this.shape_36.setTransform(110.6,-266.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgGgCgCgGQgDgFAAgHQAAgGADgGQACgEAGgEQAFgDAGAAQAHAAAGADQAEAEADAEQAEAGAAAGQAAAHgEAFQgDAGgEACQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEgBgFQABgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_37.setTransform(105.45,-267.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEADAAAEQAAAEgCADQgCACgDACQAFAAADACQADACAAAGQAAAEgDADQgCADgDABQgEACgFgBgAgLASIAMAAQAFAAADgDQACgCAAgDQAAgEgDgDQgDgBgFAAIgLAAgAgLgDIALAAIAEgBIADgCIABgEQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_38.setTransform(100.725,-267.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AAOAWIAAgjIgcAjIgGAAIAAgsIAGAAIAAAjIAcgjIAHAAIAAAsg");
	this.shape_39.setTransform(95.5,-267.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAgIAAg/IAGAAIAAAJQADgEAFgDQAFgCAEgBQAGAAAFADQAFAEADAEQADAGAAAHQAAAHgDAEQgDAGgFACQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEAAQAFAAAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_40.setTransform(90.225,-266.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AANAWIAAgmIgZAAIAAAmIgGAAIAAgsIAlAAIAAAsg");
	this.shape_41.setTransform(84.675,-267.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("AgQAWIAAgsIAGAAIAAATIALAAQAIAAAEADQAEADAAAGQAAAEgCAEQgCACgDACQgEACgEgBgAgKASIALAAQAFAAADgDQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_42.setTransform(77.975,-267.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_43.setTransform(73.625,-267.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAgIgCgBIAAgFIACAAIABAAQAEAAADgCQADgCACgFIADgGIgTgqIAGAAIAPAiIAOgiIAGAAIgUAyQgCAHgEADQgEADgGAAIgCAAg");
	this.shape_44.setTransform(69.7,-266.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AAZAWIgUgUIgCAAIAAAUIgFAAIAAgUIgCAAIgUAUIgIAAIAXgWIgWgWIAIAAIATATIACAAIAAgTIAFAAIAAATIADAAIASgTIAIAAIgVAWIAWAWg");
	this.shape_45.setTransform(64.425,-267.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgGgCgCgGQgDgFgBgHQABgGADgGQACgEAGgEQAFgDAGAAQAHAAAFADQAGAEACAEQAEAGAAAGQAAAHgEAFQgCAGgGACQgFADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQACgEAAgFQAAgEgCgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_46.setTransform(58.55,-267.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_47.setTransform(52.725,-267.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAhIAAgkIgcAkIgGAAIAAgsIAGAAIAAAjIAcgjIAFAAIAAAsgAgJgXQgEgDABgGIAEAAQABAEACACQACACADAAQAEAAACgCQADgCgBgEIAGAAQgBAGgEADQgDAEgGAAQgGAAgDgEg");
	this.shape_48.setTransform(44.7,-268.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAWIAAgjIgcAjIgHAAIAAgsIAHAAIAAAjIAcgjIAGAAIAAAsg");
	this.shape_49.setTransform(37.15,-267.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_50.setTransform(31.225,-267.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgBAMgBIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgCAEgCQAFgBAEgBQAJABAFAEQAEAEAAAJIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHABgEgEgAgBACQgGAAgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOACg");
	this.shape_51.setTransform(25.425,-267.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.902)").s().p("AgIAUQgFgDgDgFQgDgFAAgHQAAgGADgGQADgEAFgEQAGgDAGAAQAEABAEABIAHADIgDAGIgGgDIgGgBQgFAAgDABQgEACgCAFQgCAEAAAEQAAAFACAEQACAEAEACQADADAEAAIAIgCQADgBADgDIACAGQgDACgEACQgEABgFAAQgGAAgFgDg");
	this.shape_52.setTransform(20.95,-267.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("AgKAUQgFgDgDgFQgDgFAAgHQAAgGADgFQADgFAFgEQAFgDAFAAQAHAAAEADQAFAEADAEQADAGAAAGIAAABIgkAAQAAAHAEAFQAFAFAHAAQAFAAAEgCQAFgCACgDIACAGIgIAEQgEACgGAAQgHABgFgEgAAPgEIgCgHIgFgEQgEgCgEAAIgGACIgFAEIgDAHIAdAAIAAAAg");
	this.shape_53.setTransform(16.275,-267.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.902)").s().p("AgTAXIgDgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgGAAIAAgmIgSAAIgEAbQgBAGgCADQgDADgFAAIgDAAg");
	this.shape_54.setTransform(10.85,-267.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgGgCgCgGQgDgFAAgHQAAgGADgGQACgEAGgEQAFgDAGAAQAHAAAGADQAEAEADAEQAEAGAAAGQAAAHgEAFQgDAGgEACQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQADgEgBgFQABgEgDgEQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_55.setTransform(6,-267.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.902)").s().p("AAKAWIgTgUIgCAAIAAAUIgGAAIAAgsIAGAAIAAATIADAAIARgTIAIAAIgVAWIAWAWg");
	this.shape_56.setTransform(1.65,-267.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAXIAAgkIgdAkIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsg");
	this.shape_57.setTransform(302.45,-276.95);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.902)").s().p("AATAXIAAgjIgRAcIgEAAIgQgcIAAAjIgGAAIAAgsIAHAAIARAeIASgeIAHAAIAAAsg");
	this.shape_58.setTransform(296.525,-276.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.902)").s().p("AAOAXIAAgkIgcAkIgFAAIAAgsIAFAAIAAAjIAcgjIAGAAIAAAsg");
	this.shape_59.setTransform(290.55,-276.95);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgSIgGACQgDACgFgBQgFAAgEgCQgEgBgCgFQgCgCAAgHIAAgMIAGAAIAAALQAAAIADACQAEADAFAAIAHgBIAGgCIAAgVIAGAAIAAAsg");
	this.shape_60.setTransform(285.225,-276.95);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAgIgDgBIABgFIABAAIADAAQADAAADgCQACgCADgFIACgGIgTgqIAIAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgFAAIgDAAg");
	this.shape_61.setTransform(280.7,-275.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.902)").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgSIADAAQADAAACgDQACgDAAgGIAEgbIAcAAIAAAnIAHAAIAAASgAgHAAIgBAGIgDAFIAWAAIAAghIgQAAg");
	this.shape_62.setTransform(276.05,-276.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.902)").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAFQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgIIgFgFQgEgBgEAAIgGABIgFAFIgDAIIAdAAIAAAAg");
	this.shape_63.setTransform(271.125,-276.95);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAEQAAAEgCADQgCACgDABQAFABADACQADACAAAFQAAAFgDADQgCADgDABQgEABgFABgAgLARIAMAAQAFAAADgCQACgBAAgFQAAgDgDgCQgDgCgFgBIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgCgEAAIgKAAg");
	this.shape_64.setTransform(266.575,-276.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAWIgHgEIACgFIAHADIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgCQAEgCAAgEQAAgDgDgDQgCgBgFAAIgHABIgGADIgCgGIAHgCIAIgBQAIAAAEACQAEADABAGQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDACQgCADgEACQgFABgFABQgGgBgFgBg");
	this.shape_65.setTransform(259.775,-276.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_66.setTransform(254.675,-277.925);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_67.setTransform(251.025,-276.95);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOABg");
	this.shape_68.setTransform(245.825,-276.95);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAWIgHgEIACgFIAHADIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgCQAEgCAAgEQAAgDgDgDQgCgBgFAAIgHABIgGADIgCgGIAHgCIAIgBQAIAAAEACQAEADABAGQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDACQgCADgEACQgFABgFABQgGgBgFgBg");
	this.shape_69.setTransform(241.225,-276.95);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.902)").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_70.setTransform(236.625,-276.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAJIAFgRIAGAAIgGARg");
	this.shape_71.setTransform(233.8,-280.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAEQAAAEgCADQgCACgDABQAFABADACQADACAAAFQAAAFgDADQgCADgDABQgEABgFABgAgLARIAMAAQAFAAADgCQACgBAAgFQAAgDgDgCQgDgCgFgBIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgCgEAAIgKAAg");
	this.shape_72.setTransform(230.875,-276.95);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAVQgEgDgDgGQgEgFAAgHQAAgGAEgFQADgFAEgEQAGgCAGAAQAHAAAFACQAGAEACAFQADAFAAAGQAAAHgDAFQgCAGgGADQgFADgHAAQgGAAgGgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQACgEABgFQgBgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_73.setTransform(225.75,-276.95);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgnIgZAAIAAAnIgGAAIAAgsIAlAAIAAAsg");
	this.shape_74.setTransform(220.525,-276.95);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAVQgEgDgEgGQgCgFAAgHQAAgGACgFQAEgFAEgEQAGgCAGAAQAHAAAGACQAEAEAEAFQADAFAAAGQAAAHgDAFQgEAGgEADQgGADgHAAQgGAAgGgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQACgEAAgFQAAgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_75.setTransform(213.2,-276.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_76.setTransform(207.925,-276.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgSIgGACQgDACgFgBQgFAAgEgCQgEgBgCgFQgCgCAAgHIAAgMIAGAAIAAALQAAAIADACQAEADAFAAIAHgBIAGgCIAAgVIAGAAIAAAsg");
	this.shape_77.setTransform(202.725,-276.95);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_78.setTransform(199.275,-277.925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_79.setTransform(195.625,-276.95);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOABg");
	this.shape_80.setTransform(190.425,-276.95);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAXIgPgTIgNATIgHAAIASgXIgRgVIAIAAIALARIAOgRIAGAAIgQAVIARAXg");
	this.shape_81.setTransform(185.9,-276.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.902)").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAFQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgIIgFgFQgEgBgEAAIgGABIgFAFIgDAIIAdAAIAAAAg");
	this.shape_82.setTransform(181.325,-276.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.902)").s().p("AATAXIAAgjIgRAcIgEAAIgQgcIAAAjIgGAAIAAgsIAHAAIARAeIASgeIAHAAIAAAsg");
	this.shape_83.setTransform(175.675,-276.95);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_84.setTransform(167.775,-276.95);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAgIgDgBIABgFIACAAIACAAQADAAADgCQACgCADgFIACgGIgTgqIAHAAIAPAiIAOgiIAGAAIgUAyQgCAHgEADQgEADgFAAIgDAAg");
	this.shape_85.setTransform(163.1,-275.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAXIAAgsIAZAAIAAAFIgTAAIAAAng");
	this.shape_86.setTransform(159.625,-276.95);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAXIAAgkIgdAkIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsg");
	this.shape_87.setTransform(154.85,-276.95);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAEQAAAEgCADQgCACgDABQAFABADACQADACAAAFQAAAFgDADQgCADgDABQgEABgFABgAgLARIAMAAQAFAAADgCQACgBAAgFQAAgDgDgCQgDgCgFgBIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgCgEAAIgKAAg");
	this.shape_88.setTransform(150.025,-276.95);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.902)").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgSIADAAQADAAACgDQACgDAAgGIAEgbIAcAAIAAAnIAHAAIAAASgAgHAAIgBAGIgDAFIAWAAIAAghIgQAAg");
	this.shape_89.setTransform(144.95,-276.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAVQgEgDgDgGQgEgFAAgHQAAgGAEgFQADgFAEgEQAGgCAGAAQAHAAAFACQAGAEACAFQADAFAAAGQAAAHgDAFQgCAGgGADQgFADgHAAQgGAAgGgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQACgEABgFQgBgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_90.setTransform(139.8,-276.95);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAhIAAg/IAGAAIAAAJQADgGAFgCQAFgCAEAAQAGAAAFACQAFAEADAFQADAFAAAHQAAAGgDAFQgDAGgFADQgFADgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgXQgDACgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_91.setTransform(134.625,-276.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_92.setTransform(129.725,-276.95);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.902)").s().p("AAKAXIgTgWIgCAAIAAAWIgGAAIAAgsIAGAAIAAATIACAAIASgTIAIAAIgUAUIAVAYg");
	this.shape_93.setTransform(126.15,-276.95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.902)").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAFQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFAAAEgBQAFgCACgCIACAFIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgIIgFgFQgEgBgEAAIgGABIgFAFIgDAIIAdAAIAAAAg");
	this.shape_94.setTransform(121.225,-276.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.902)").s().p("AgTAXIgDgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgHAAIAAgmIgRAAIgDAbQgCAGgCADQgDADgFAAIgDAAg");
	this.shape_95.setTransform(115.8,-276.925);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.902)").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgGAFgDQAFgCAFAAQAHAAAEACQAFAEADAFQADAFAAAGIAAAAIgkAAQAAAJAEAEQAFAFAHgBQAFAAAEgBIAHgEIACAFIgIAFQgEACgGAAQgHgBgFgDgAAPgDIgCgIIgFgFQgEgBgEAAIgGABIgFAFIgDAIIAdAAIAAAAg");
	this.shape_96.setTransform(111.175,-276.95);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgCAHgCQAGgCAMABIAAgBQAAgGgDgDQgDgEgHAAIgFABIgFACIgDADIgCgGQADgDAEgBQAFgBAEAAQAJgBAFAFQAEAEAAAKIAAAbIgGAAIAAgIQgCADgEADQgFACgFABQgHgBgEgDgAgBABQgGACgCACQgDACABADQAAADACADQADACAFAAIAGgBQADgBADgDQACgEAAgEIAAgFIgOABg");
	this.shape_97.setTransform(104.075,-276.95);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_98.setTransform(99.825,-276.95);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.902)").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_99.setTransform(93.375,-276.975);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_100.setTransform(88.775,-276.95);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_101.setTransform(83.525,-276.95);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.902)").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_102.setTransform(78.375,-276.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAhIAAg/IAGAAIAAAJQADgGAFgCQAFgCAEAAQAGAAAFACQAFAEADAFQADAFAAAHQAAAGgDAFQgDAGgFADQgFADgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgXQgDACgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_103.setTransform(73.875,-276.05);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAVQgEgDgDgGQgEgFAAgHQAAgGAEgFQADgFAEgEQAGgCAGAAQAHAAAFACQAGAEACAFQADAFAAAGQAAAHgDAFQgCAGgGADQgFADgHAAQgGAAgGgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQACgEABgFQgBgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_104.setTransform(68.25,-276.95);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAXIAAgsIAZAAIAAAFIgTAAIAAAng");
	this.shape_105.setTransform(64.175,-276.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAWIgHgEIACgFIAHADIAJACQAFAAAEgCQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgDIgLgBIAAgEQAIAAAEgCQAEgCAAgEQAAgDgDgDQgCgBgFAAIgHABIgGADIgCgGIAHgCIAIgBQAIAAAEACQAEADABAGQAAAEgDADQgDADgGABIAHAAQADACACADQACACAAADQAAAFgDACQgCADgEACQgFABgFABQgGgBgFgBg");
	this.shape_106.setTransform(59.875,-276.95);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAVQgFgDgDgGQgCgFAAgHQAAgGACgFQADgFAFgEQAGgCAGAAQAHAAAGACQAFAEADAFQACAFAAAGQAAAHgCAFQgDAGgFADQgGADgHAAQgGAAgGgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQACgEAAgFQAAgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_107.setTransform(53.1,-276.95);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAXIAAgsIAZAAIAAAFIgTAAIAAAng");
	this.shape_108.setTransform(49.025,-276.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAVQgFgDgEgGQgCgFAAgHQAAgGACgFQAEgFAFgEQAFgCAGAAQAHAAAGACQAEAEAEAFQADAFAAAGQAAAHgDAFQgEAGgEADQgGADgHAAQgGAAgFgDgAgIgOQgEACgCADQgCAFAAAEQAAAFACAEQADAEADACQAEADAEgBQAFABAEgDQAEgCACgEQADgEgBgFQABgEgDgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_109.setTransform(44.35,-276.95);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.902)").s().p("AgQAXIAAgsIAGAAIAAATIALAAQAIAAAEACQAEACAAAHQAAAEgCADQgCADgDACQgEABgEABgAgKARIALAAQAFABADgDQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_110.setTransform(39.675,-276.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_111.setTransform(34.625,-276.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAXIAAgsIAGAAIAAAmIAWAAIAAgmIAFAAIAAAmIAWAAIAAgmIAGAAIAAAsg");
	this.shape_112.setTransform(28.175,-276.95);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_113.setTransform(23.375,-277.925);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAhIAAg/IAGAAIAAAJQADgGAFgCQAFgCAEAAQAGAAAFACQAFAEADAFQADAFAAAHQAAAGgDAFQgDAGgFADQgFADgGAAIgGgBIgGgEQgDgCgCgDIAAAcgAgIgXQgDACgDAEQgCADAAAGQAAAFACADQACAEAEACQAEADAEgBQAFABAEgDQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_114.setTransform(19.825,-276.05);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAXIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_115.setTransform(14.925,-276.95);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAgIgDgBIABgFIACAAIACAAQADAAADgCQACgCADgFIACgGIgTgqIAHAAIAPAiIAOgiIAGAAIgUAyQgCAHgEADQgEADgGAAIgCAAg");
	this.shape_116.setTransform(11,-275.975);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.902)").s().p("AANAXIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAATIAZAAIAAgTIAGAAIAAAsg");
	this.shape_117.setTransform(6.325,-276.95);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAXIAAgsIARAAQAHAAADACQAEAEAAAEQAAAEgCADQgCACgDABQAFABADACQADACAAAFQAAAFgDADQgCADgDABQgEABgFABgAgLARIAMAAQAFAAADgCQACgBAAgFQAAgDgDgCQgDgCgFgBIgLAAgAgLgCIALAAIAEgBIADgEIABgDQAAgDgCgCQgDgCgEAAIgKAAg");
	this.shape_118.setTransform(1.625,-276.95);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.902)").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_119.setTransform(283.375,-286.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAgIgCgBIAAgFIABAAIACAAQAEAAADgCQADgCACgFIADgGIgTgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgGAAIgCAAg");
	this.shape_120.setTransform(278.7,-285.825);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_121.setTransform(275.225,-286.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.902)").s().p("AAOAWIAAgjIgbAjIgHAAIAAgsIAHAAIAAAjIAbgjIAHAAIAAAsg");
	this.shape_122.setTransform(270.45,-286.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEACAAAGQAAAEgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEABgFAAgAgLASIAMAAQAFAAADgCQACgDAAgDQAAgEgDgDQgDgCgFAAIgLAAgAgLgDIALAAIAEgBIADgDIABgDQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_123.setTransform(265.625,-286.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.902)").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDABgFIADgcIAcAAIAAAmIAHAAIAAATgAgHAAIgCAHIgCADIAXAAIAAghIgQAAg");
	this.shape_124.setTransform(260.55,-286.15);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAgIgCgBIAAgFIABAAIACAAQAEAAADgCQADgCACgFIADgGIgTgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgGAAIgCAAg");
	this.shape_125.setTransform(253.95,-285.825);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.902)").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_126.setTransform(248.725,-286.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAUQgEgDgDgFQgEgFAAgHQAAgGAEgGQADgEAEgDQAGgEAGAAQAHAAAFAEQAGADACAEQADAGAAAGQAAAHgDAFQgCAFgGADQgFADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQACgEABgFQgBgFgCgDQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_127.setTransform(242.85,-286.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.902)").s().p("AAKAWIgTgVIgCAAIAAAVIgGAAIAAgsIAGAAIAAATIACAAIASgTIAIAAIgUAWIAVAWg");
	this.shape_128.setTransform(238.5,-286.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.902)").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_129.setTransform(233.475,-286.825);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAgIgCgBIAAgFIABAAIACAAQAEAAADgCQADgCACgFIADgGIgTgqIAHAAIAOAiIAOgiIAHAAIgWAyQgBAHgEADQgEADgGAAIgCAAg");
	this.shape_130.setTransform(227.4,-285.825);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.902)").s().p("AgGALIAGgVIAHAAIgIAVg");
	this.shape_131.setTransform(221.975,-284.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.902)").s().p("AAMAXIAAgTIgLAAIgLATIgHAAIANgUQgFgBgDgCQgDgDAAgFQAAgFACgDQACgDAEgBQADgCAEAAIASAAIAAAtgAgGgOQgCACAAAEQAAAEACACQADACAEAAIALAAIAAgRIgLAAQgEAAgDADg");
	this.shape_132.setTransform(218.475,-286.825);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(255,255,255,0.902)").s().p("AgUAXIgCgBIACgGIABABIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgGIAEgfIAeAAIAAAsIgHAAIAAgmIgRAAIgDAbQgBAGgDADQgDADgFAAIgEAAg");
	this.shape_133.setTransform(213.55,-286.775);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_134.setTransform(210.375,-287.775);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(255,255,255,0.902)").s().p("AgHAhQgFgBgDgEQgEgEgCgHIgCgRQABgJACgHQACgHAGgEQAFgDAJgCIACAAIADgBIAFAAIAEAAIADgBIABAGIgHABIgFAAIgDAAIgCABIgJADQgFACgCAFQgDAFAAAJQADgEAFgCQAFgDAFAAQAGAAAFADQAFADADAFQACAEAAAHQAAAHgCAFQgDAGgGADQgFADgGAAQgFAAgDgCgAgGgEIgGAEIgEAFQAAAJADAFQADAGADACQAEACAEAAQAEAAAFgCQADgDACgEQACgEAAgFQAAgFgCgEQgCgDgDgCQgEgCgFAAQgDAAgEABg");
	this.shape_135.setTransform(206.75,-287.925);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgGQAEgEAFgDQAFgEAGAAQAHAAAGAEQAEADAEAEQADAGAAAGQAAAHgDAFQgEAFgEADQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgFgDgDQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_136.setTransform(201.4,-286.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.902)").s().p("AATAWIAAgiIgRAcIgEAAIgQgcIAAAiIgGAAIAAgsIAHAAIARAfIASgfIAHAAIAAAsg");
	this.shape_137.setTransform(195.575,-286.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgFgDgEgFQgCgFAAgHQAAgGACgGQAEgEAFgDQAFgEAGAAQAHAAAGAEQAEADAEAEQADAGAAAGQAAAHgDAFQgEAFgEADQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQADAEADACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgFgDgDQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_138.setTransform(189.7,-286.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_139.setTransform(185.125,-286.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAWIAAgsIARAAQAHAAADAEQAEACAAAGQAAAEgCACQgCADgDABQAFAAADACQADADAAAFQAAAEgDADQgCADgDABQgEABgFAAgAgLASIAMAAQAFAAADgCQACgDAAgDQAAgEgDgDQgDgCgFAAIgLAAgAgLgDIALAAIAEgBIADgDIABgDQAAgDgCgCQgDgCgEABIgKAAg");
	this.shape_140.setTransform(181.175,-286.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgDAEgBQAFgBAEgBQAJABAFAEQAEAFAAAIIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHAAgEgDgAgBABQgGABgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOABg");
	this.shape_141.setTransform(176.125,-286.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAUQgEgDgEgFQgCgFAAgHQAAgGACgGQAEgEAEgDQAGgEAGAAQAHAAAGAEQAEADAEAEQACAGAAAGQAAAHgCAFQgEAFgEADQgGADgHAAQgGAAgGgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQACgEAAgFQAAgFgCgDQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_142.setTransform(169.1,-286.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_143.setTransform(165.025,-286.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQgGgDgCgFQgDgFAAgHQAAgGADgGQACgEAGgDQAFgEAGAAQAHAAAGAEQAEADADAEQAEAGAAAGQAAAHgEAFQgDAFgEADQgGADgHAAQgGAAgFgDgAgIgPQgEADgCAEQgCADAAAFQAAAFACAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQADgEgBgFQABgFgDgDQgCgEgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_144.setTransform(160.35,-286.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.902)").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_145.setTransform(155.075,-286.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.902)").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDABgFIADgcIAcAAIAAAmIAHAAIAAATgAgHAAIgCAHIgCADIAXAAIAAghIgQAAg");
	this.shape_146.setTransform(149.85,-286.15);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAWIAAgjIgcAjIgGAAIAAgsIAGAAIAAAjIAcgjIAFAAIAAAsg");
	this.shape_147.setTransform(144.6,-286.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAgIAAg/IAGAAIAAAJQADgFAFgCQAFgCAEgBQAGAAAFAEQAFADADAEQADAGAAAHQAAAGgDAFQgDAFgFADQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEABQAFgBAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_148.setTransform(139.325,-285.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.902)").s().p("AgHAhQgFgBgDgEQgEgEgCgHIgCgRQABgJACgHQACgHAGgEQAFgDAJgCIACAAIADgBIAFAAIAEAAIADgBIABAGIgHABIgFAAIgDAAIgCABIgJADQgFACgCAFQgDAFAAAJQADgEAFgCQAEgDAGAAQAGAAAFADQAFADADAFQACAEAAAHQAAAHgCAFQgDAGgFADQgFADgHAAQgFAAgDgCgAgFgEIgHAEIgEAFQAAAJADAFQADAGADACQAEACAEAAQAEAAAFgCQADgDACgEQACgEAAgFQAAgFgCgEQgCgDgDgCQgEgCgFAAQgDAAgDABg");
	this.shape_149.setTransform(133.75,-287.925);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_150.setTransform(130.075,-287.775);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_151.setTransform(127.625,-286.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.902)").s().p("AANAWIAAgmIgZAAIAAAmIgGAAIAAgsIAlAAIAAAsg");
	this.shape_152.setTransform(120.975,-286.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAWIAAgjIgdAjIgFAAIAAgsIAFAAIAAAjIAdgjIAFAAIAAAsg");
	this.shape_153.setTransform(115.6,-286.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAWIAAgmIgPAAIAAgGIAjAAIAAAGIgPAAIAAAmg");
	this.shape_154.setTransform(110.925,-286.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.902)").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgFAFgDQAFgEAFAAQAHAAAEAEQAFADADAEQADAFAAAHIAAABIgkAAQAAAHAEAFQAFAEAHABQAFgBAEgBQAFgCACgDIACAGIgIAEQgEACgGAAQgHAAgFgDgAAPgEIgCgGIgFgGQgEgBgEAAIgGABIgFAGIgDAGIAdAAIAAAAg");
	this.shape_155.setTransform(104.575,-286.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.902)").s().p("AARAdIAAgNIgnAAIAAgsIAGAAIAAAmIAZAAIAAgmIAHAAIAAAmIAHAAIAAATg");
	this.shape_156.setTransform(99.775,-286.15);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.902)").s().p("AgPADIAAgFIAeAAIAAAFg");
	this.shape_157.setTransform(92.9,-286.975);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.902)").s().p("AATAdIAAgNIglAAIAAANIgGAAIAAgTIADAAQADABACgDQACgDABgFIADgcIAcAAIAAAmIAHAAIAAATgAgHAAIgCAHIgCADIAXAAIAAghIgQAAg");
	this.shape_158.setTransform(86.4,-286.15);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,255,255,0.902)").s().p("AAPAWIAAgjIgcAjIgGAAIAAgsIAGAAIAAAjIAcgjIAFAAIAAAsg");
	this.shape_159.setTransform(81.15,-286.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAgIAAg/IAGAAIAAAJQADgFAFgCQAFgCAEgBQAGAAAFAEQAFADADAEQADAGAAAHQAAAGgDAFQgDAFgFADQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEABQAFgBAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_160.setTransform(75.875,-285.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.902)").s().p("AgHAhQgFgBgDgEQgEgEgCgHIgCgRQABgJACgHQACgHAGgEQAFgDAJgCIACAAIADgBIAFAAIAEAAIADgBIABAGIgHABIgFAAIgDAAIgCABIgJADQgFACgCAFQgDAFAAAJQADgEAFgCQAEgDAGAAQAGAAAFADQAFADADAFQACAEAAAHQAAAHgCAFQgDAGgGADQgEADgHAAQgFAAgDgCgAgFgEIgHAEIgEAFQAAAJADAFQADAGADACQAEACAEAAQAEAAAFgCQADgDACgEQACgEAAgFQAAgFgCgEQgCgDgDgCQgEgCgFAAQgDAAgDABg");
	this.shape_161.setTransform(70.3,-287.925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.902)").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgXIgBgEIABgDIADgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_162.setTransform(66.625,-287.775);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAWIAAgsIAZAAIAAAGIgTAAIAAAmg");
	this.shape_163.setTransform(64.175,-286.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.902)").s().p("AAOAhIAAgkIgcAkIgGAAIAAgsIAGAAIAAAjIAcgjIAGAAIAAAsgAgJgXQgDgDgBgGIAGAAQgBAEADACQACACADAAQAEAAACgCQADgCAAgEIAEAAQAAAGgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_164.setTransform(57.35,-287.825);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,255,255,0.902)").s().p("AAOAWIAAgjIgcAjIgGAAIAAgsIAGAAIAAAjIAcgjIAHAAIAAAsg");
	this.shape_165.setTransform(51.85,-286.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.902)").s().p("AANAWIAAgUIgZAAIAAAUIgGAAIAAgsIAGAAIAAAUIAZAAIAAgUIAGAAIAAAsg");
	this.shape_166.setTransform(46.475,-286.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(255,255,255,0.902)").s().p("AgQAWIAAgsIAGAAIAAATIALAAQAIABAEACQAEADAAAGQAAAEgCAEQgCADgDABQgEABgEAAgAgKASIALAAQAFgBADgCQACgCAAgEQAAgEgDgCQgCgCgGAAIgKAAg");
	this.shape_167.setTransform(41.825,-286.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.902)").s().p("AgUAXIgCgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgHAAIAAgmIgSAAIgCAbQgCAGgCADQgDADgEAAIgFAAg");
	this.shape_168.setTransform(36.45,-286.775);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,255,255,0.902)").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgFAFgDQAFgEAFAAQAHAAAEAEQAFADADAEQADAFAAAHIAAABIgkAAQAAAHAEAFQAFAEAHABQAFgBAEgBQAFgCACgDIACAGIgIAEQgEACgGAAQgHAAgFgDgAAPgEIgCgGIgFgGQgEgBgEAAIgGABIgFAGIgDAGIAdAAIAAAAg");
	this.shape_169.setTransform(31.825,-286.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.902)").s().p("AgTAXIgDgBIABgGIACABIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgGIAEgfIAeAAIAAAsIgGAAIAAgmIgSAAIgEAbQAAAGgDADQgDADgEAAIgEAAg");
	this.shape_170.setTransform(26.4,-286.775);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgDAEgBQAFgBAEgBQAJABAFAEQAEAFAAAIIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHAAgEgDgAgBABQgGABgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOABg");
	this.shape_171.setTransform(21.625,-286.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.902)").s().p("AgWAgIAAg/IAGAAIAAAJQADgFAFgCQAFgCAEgBQAGAAAFAEQAFADADAEQADAGAAAHQAAAGgDAFQgDAFgFADQgFADgGAAIgGgBIgGgDQgDgCgCgEIAAAcgAgIgYQgDADgDAEQgCAEAAAFQAAAFACADQACAEAEACQAEACAEABQAFgBAEgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgDgDQgEgBgFAAQgEAAgEABg");
	this.shape_172.setTransform(16.775,-285.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(255,255,255,0.902)").s().p("AgOAUQgEgEAAgGQAAgFADgDQADgDAHgBQAGgCAMAAIAAgBQAAgFgDgEQgDgDgHAAIgFABIgFACIgDACIgCgFQADgDAEgBQAFgBAEgBQAJABAFAEQAEAFAAAIIAAAbIgGAAIAAgIQgCAEgEADQgFACgFAAQgHAAgEgDgAgBABQgGABgCACQgDACABAEQAAAEACACQADACAFAAIAGgBQADgCADgDQACgCAAgGIAAgEIgOABg");
	this.shape_173.setTransform(11.225,-286.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.902)").s().p("AASAgIAAg5IgjAAIAAA5IgGAAIAAg/IAvAAIAAA/g");
	this.shape_174.setTransform(5.675,-287.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(255,255,255,0.902)").s().p("AAAAEIgFAKIgFgDIAHgJIgLgCIACgGIALAFIgBgMIAFAAIgBAMIALgFIACAGIgMACIAIAJIgFADg");
	this.shape_175.setTransform(0.8,-289.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-297,319.1,36.5);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAJIgMAVIgKgHIAQgTIgZgFIAEgNIAYAKIgCgZIALAAIgBAZIAXgKIAEANIgZAFIARATIgKAHg");
	this.shape.setTransform(52.45,2.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBEIgRgsIg4AAIgQAsIgPAAIA1iHIANAAIA1CHgAAYAMIgYg+IgXA+IAvAAg");
	this.shape_1.setTransform(42.275,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBEIAAh6IgmAAIAAgNIBZAAIAAANIglAAIAAB6g");
	this.shape_2.setTransform(31,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA9QgQgJgJgQQgJgPgBgVQABgUAJgPQAJgQAQgJQAQgIATgBQAVAAAQAKQAPAIAKAQQAJAPAAAUQAAAUgJAQQgKAPgQAKQgPAJgVAAQgTAAgQgJgAgcgwQgMAHgIANQgHANAAAPQAAAQAHANQAIANAMAHQANAHAPAAQARAAAMgHQANgHAHgNQAHgNAAgQQAAgPgHgNQgHgNgNgHQgMgHgRgBQgPABgNAHg");
	this.shape_3.setTransform(17.625,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBEIAAg2IgxhRIARAAIAmBDIAphDIAOAAIgwBRIAAA2g");
	this.shape_4.setTransform(3.75,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA9QgQgJgJgQQgJgPgBgVQABgUAJgPQAJgQAQgJQAQgIATgBQAVAAAQAKQAPAIAKAQQAJAPAAAUQAAAUgJAQQgKAPgQAKQgPAJgVAAQgTAAgQgJgAgcgwQgMAHgIANQgHANAAAPQAAAQAHANQAIANAMAHQANAHAPAAQARAAAMgHQANgHAHgNQAHgNAAgQQAAgPgHgNQgHgNgNgHQgMgHgRgBQgPABgNAHg");
	this.shape_5.setTransform(-10.225,6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFBEIAAh6IgnAAIAAgNIBZAAIAAANIgmAAIAAB6g");
	this.shape_6.setTransform(-23.4,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwBUIAAggIhfAAIAAAgIgNAAIAAgtIAIAAQAEAAAEgFQADgDADgIIADgQIAKhaIBGAAIAAB6IAQAAIAAAtgAgVAHQgBAOgDAHQgDAJgEACIA/AAIAAhtIgrAAg");
	this.shape_7.setTransform(-40.075,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_8.setTransform(-49.125,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrBEIAAiHIAmAAQATAAAKAJQALAKAAAQQAAAJgEAIQgEAHgKAGQAMACAIAIQAHAJAAANQAAALgFAJQgFAIgJAFQgKAFgNAAgAgcA4IAdAAQAOgBAHgHQAHgHABgLQgBgMgHgGQgHgGgMgBIgfAAgAgcgFIAZAAQAGgBAGgDQAGgDADgHQADgFAAgHQAAgLgHgGQgHgGgNgBIgWAAg");
	this.shape_9.setTransform(-57.275,6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBWIAAiHIAOAAIAACHgAAOhEQgDgDAAgEQAAgEADgDQACgDAEABQAEgBADADQADADAAAEQAAAEgDADQgDACgEAAQgEAAgCgCgAgahEQgDgDAAgEQAAgEADgDQACgDAFABQAEgBACADQADADAAAEQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_10.setTransform(15.575,-16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_11.setTransform(10.075,-14.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFBEIAAh6IgnAAIAAgNIBZAAIAAANIgmAAIAAB6g");
	this.shape_12.setTransform(2.5,-14.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAmBEIAAg9IhLAAIAAA9IgPAAIAAiHIAPAAIAAA9IBLAAIAAg9IAPAAIAACHg");
	this.shape_13.setTransform(-9.75,-14.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAtBEIgRgsIg4AAIgQAsIgPAAIA1iHIANAAIA1CHgAAYAMIgYg/IgXA/IAvAAg");
	this.shape_14.setTransform(-23.375,-14.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpBEIAAiHIAmAAQAOAAAKAGQAKAFAGAIQAFAKAAANQAAALgFAKQgGAJgKAGQgKAGgOAAIgXAAIAAAzgAgaAEIAWAAQAIABAHgEQAHgDAFgGQAEgIAAgJQAAgLgEgHQgFgGgHgDQgHgCgIAAIgWAAg");
	this.shape_15.setTransform(-34.825,-14.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAtBEIgRgsIg4AAIgQAsIgPAAIA1iHIANAAIA1CHgAAYAMIgYg/IgXA/IAvAAg");
	this.shape_16.setTransform(-47.325,-14.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglBEIAAiHIBLAAIAAAOIg8AAIAAB5g");
	this.shape_17.setTransform(-57.875,-14.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,-33.3,126.6,54.599999999999994);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBWIAAiHIAOAAIAACHgAAOhFQgDgCAAgEQAAgEADgDQACgCAEAAQAEAAADACQADADAAAEQAAAEgDACQgDADgEABQgEgBgCgDgAgahFQgDgCAAgEQAAgEADgDQACgCAFAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEABQgFgBgCgDg");
	this.shape.setTransform(89.075,-15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjA9QgQgJgJgQQgJgPgBgVQABgTAJgQQAJgQAQgJQAQgIATgBQAVAAAQAKQAPAIAKAQQAJAQAAATQAAAUgJAQQgKAPgQAKQgPAJgVAAQgTAAgQgJgAgcgwQgMAHgIANQgHANAAAPQAAAQAHANQAIAMAMAIQANAHAPAAQARAAAMgHQANgIAHgMQAHgNAAgQQAAgPgHgNQgHgNgNgHQgMgHgRgBQgPABgNAHg");
	this.shape_1.setTransform(77.975,-13.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmBEIAAg+IhLAAIAAA+IgPAAIAAiHIAPAAIAAA+IBLAAIAAg+IAPAAIAACHg");
	this.shape_2.setTransform(62.4,-13.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBEIAAiHIBKAAIAAANIg8AAIAAAxIA6AAIAAALIg6AAIAAAxIA9AAIAAANg");
	this.shape_3.setTransform(49.8,-13.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABMBEIg4g+IgNAAIAAA+IgNAAIAAg+IgNAAIg4A+IgSAAIA/hFIg5hCIARAAIA0A9IAMAAIAAg9IANAAIAAA9IAMAAIA0g9IARAAIg5BCIA/BFg");
	this.shape_4.setTransform(34.525,-13.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBEIAAiHIAmAAQATAAAKAJQALAKAAAQQAAAJgEAIQgEAHgKAGQAMACAIAIQAHAJAAANQAAALgFAJQgFAIgJAFQgKAFgNAAgAgcA4IAdAAQAOgBAHgHQAHgHABgLQgBgMgHgGQgHgGgMgBIgfAAgAgcgFIAZAAQAGgBAGgDQAGgDADgHQADgFAAgHQAAgLgHgGQgHgGgNgBIgWAAg");
	this.shape_5.setTransform(19.575,-13.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA9QgQgJgJgQQgJgPgBgVQABgTAJgQQAJgQAQgJQAQgIATgBQAVAAAQAKQAPAIAKAQQAJAQAAATQAAAUgJAQQgKAPgQAKQgPAJgVAAQgTAAgQgJgAgcgwQgMAHgIANQgHANAAAPQAAAQAHANQAIAMAMAIQANAHAPAAQARAAAMgHQANgIAHgMQAHgNAAgQQAAgPgHgNQgHgNgNgHQgMgHgRgBQgPABgNAHg");
	this.shape_6.setTransform(4.925,-13.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwBUIAAggIhfAAIAAAgIgNAAIAAgtIAIAAQAEAAAEgFQADgDADgIIADgRIAKhZIBGAAIAAB6IAQAAIAAAtgAgVAHQgBANgDAJQgDAHgEADIA/AAIAAhtIgrAAg");
	this.shape_7.setTransform(-10.125,-12.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjA9QgQgJgJgQQgJgPgBgVQABgTAJgQQAJgQAQgJQAQgIATgBQAVAAAQAKQAPAIAKAQQAJAQAAATQAAAUgJAQQgKAPgQAKQgPAJgVAAQgTAAgQgJgAgcgwQgMAHgIANQgHANAAAPQAAAQAHANQAIAMAMAIQANAHAPAAQARAAAMgHQANgIAHgMQAHgNAAgQQAAgPgHgNQgHgNgNgHQgMgHgRgBQgPABgNAHg");
	this.shape_8.setTransform(-24.775,-13.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmBEIAAh6IhKAAIAAB6IgPAAIAAiHIBnAAIAACHg");
	this.shape_9.setTransform(-40.3,-13.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-32.6,145.9,33.7);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30521").s().p("AAlBEIgNgnIgwAAIgNAnIgaAAIAziHIAaAAIAyCHgAARAJIgRgwIgRAwIAiAAg");
	this.shape.setTransform(30.65,-13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E30521").s().p("AAtBEIAAhmIgjA9IgUAAIgig9IAABmIgZAAIAAiHIAhAAIAkBAIAmhAIAgAAIAACHg");
	this.shape_1.setTransform(15.4,-13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E30521").s().p("AAlBEIgNgnIgwAAIgNAnIgaAAIAziHIAaAAIAyCHgAARAJIgRgwIgRAwIAiAAg");
	this.shape_2.setTransform(0.05,-13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E30521").s().p("AgtBEIAAiHIAtAAQAPABALAFQAKAGAFAKQAFAJABAMQgBAMgFAKQgFAKgKAFQgLAHgPAAIgUAAIAAAwgAgUAAIAPAAQALAAAGgGQAIgGAAgMQAAgLgIgGQgGgEgLAAIgPAAg");
	this.shape_3.setTransform(-11.95,-13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E30521").s().p("AgnBEIAAiHIBPAAIAAAYIg1AAIAABvg");
	this.shape_4.setTransform(-22.525,-13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E30521").s().p("AgkA9QgQgIgJgQQgJgQAAgVQAAgUAJgPQAJgRAQgIQAQgJAUAAQAUABARAIQAQAIAJARQAJAPAAAUQAAAUgJARQgKAPgQAJQgQAJgUAAQgUAAgQgJgAgWgnQgKAGgGAKQgFAKAAANQAAAOAFAJQAGALAKAFQAKAHAMAAQANAAAKgHQAKgFAFgLQAGgJAAgOQAAgNgGgKQgFgKgKgGQgKgFgNAAQgMAAgKAFg");
	this.shape_5.setTransform(-36.225,-13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E30521").s().p("AguBEIAAiHIAuAAQAPABAKAFQALAGAFAKQAGAJAAAMQAAAMgGAKQgFAKgLAFQgKAHgPAAIgUAAIAAAwgAgUAAIAQAAQAJAAAIgGQAGgGABgMQgBgLgGgGQgIgEgJAAIgQAAg");
	this.shape_6.setTransform(-49.5,-13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E30521").s().p("AAeBEIAAhwIg6AAIAABwIgaAAIAAiHIBtAAIAACHg");
	this.shape_7.setTransform(-63.05,-13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.4,-31.9,114.30000000000001,33.6);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqWBmIAAjLIUsAAIAADLg");
	this.shape.setTransform(-0.0061,-0.0371,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,-7.2,93.9,14.4);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C91").s().p("AgxgvIBjAuIhjAyg");
	this.shape.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-2.3,10.1,9.7);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjlBmIAAjLIHLAAIAADLg");
	this.shape.setTransform(-0.0097,-0.0371,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-7.2,32.6,14.4);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30521").s().p("AidFMQigiQAAjuIAAjlIE9iSIE+CSIAADlQAADuifCQQhPBGhQAYQhPgYhOhGgAiXinIAAB1QAAClBoBeQAYAVAYAOQA7gkAng8QA0hTAAhzIAAh1IiXhGg");
	this.shape.setTransform(-0.0072,-0.0246,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-30.2,45,60.4);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30521").s().p("AgLGqIAApIIiQBCIAAi/IE3iOIAANTg");
	this.shape.setTransform(-0.0309,-0.0246,0.7086,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-30.2,22,60.4);


(lib.gradient = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(23,29,47,0)","rgba(30,37,60,0)","#000000"],[0,0.361,0.631,1],0,-300,0,300).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(449).to({_off:true},1).wait(417));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaAVIBsg4QAlALAkAMIh3AwQgegIgggHg");
	this.shape.setTransform(40.9,-56.6625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAgQgbgJgdgIQgdgIgggGIBsg4QAmAKAjANQAdAKAbAMQAqARAiATIiHAeQgbgMgigMg");
	this.shape_1.setTransform(47.5125,-54.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTCYQAYgKAUgKQBmg1AAhAQAAhFh2g2QgcgNghgLQgcgJgcgIQgegIgggHIBtg5QAlAKAkANQAdALAbALQApASAiATQCcBYAABxQAABVhVBGIgHAFg");
	this.shape_2.setTransform(55.2875,-38.0375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlSCPIArgEIBdgLIAAABQCFgUBaglQAXgJAVgLQBng0AAg/QAAhHh4g2QgbgMghgMQgbgJgdgIQgegIgfgHIBsg5QAlALAjAMQAdALAcAMQAqARAiATQCbBYAABzQAABThUBGIgIAFQgXASgeARQiRBSjnAiIgDABIAAAAIhFAIg");
	this.shape_3.setTransform(44.8375,-30.0625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnGEvIAyijQAlABAkAAQA2AAA3gEIArgDIBdgLIAAABQCFgUBaglQAXgJAVgLQBng0AAhAQAAhGh3g2QgcgNgigLQgbgJgdgIQgdgIgfgHIBrg5QAmALAkAMQAdALAbALQAqASAiATQCbBYAABzQAABThUBGIgHAFQgYASgeAQQiRBTjnAiIgDAAIAAABIhjALQhRAHhSAAQg5AAhCgEg");
	this.shape_4.setTransform(33.2125,-29.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjsEvIgpgDIhjgMQisgZh9gzIDPhtQAvALA1AIIAFABIBhALIADAAQAmAEAlACQAlABAkAAQA2AAA3gEIAqgDIBegLIAAABQCFgUBaglQAXgJAVgLQBng0AAhAQAAhGh3g2QgcgNghgLQgcgJgcgIQgegIgggHIBtg5QAlALAkAMQAdALAbALQAqASAiATQCcBYAABzQgBBThUBGIgHAFQgYASgdAQQiSBTjoAiIgCAAIAAABIhjALQhRAHhSAAQg5AAhCgEg");
	this.shape_5.setTransform(11.4,-29.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah5EvIgpgDIhjgMQisgZh9gzQgsgTgngWQg0gdgjghQg7g8AAhGQAAiJDahhICBAoQiuA9AABVQAABABnA0QBCAiBeAWQAvALA1AIIAFABIBhALIADAAQAmAEAlACQAkABAkAAQA2AAA3gEIArgDIBdgLIAAABQCFgUBbglQAXgJAVgLQBng0AAhAQAAhGh4g2QgbgNgigLQgbgJgdgIQgdgIgggHIBsg5QAmALAkAMQAdALAbALQAqASAiATQCbBYAABzQAABThUBGIgHAFQgYASgeAQQiRBTjoAiIgDAAIAAABIhjALQhRAHhSAAQg4AAhCgEg");
	this.shape_6.setTransform(-0.075,-29.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah5FHIgpgDIhjgMQisgZh9g0QgsgSgngWQg0gegjggQg7g9AAhHQAAiHDahhIANgGQCwhLDogSIApBOQi6AKiNAxIgGACQiuA9AABVQAAA/BnA1QBCAiBeAWQAvALA1AIIAFABIBhALIADAAQAmAEAlABQAkACAkAAQA2AAA3gEIArgDIBdgLIAAAAQCFgUBbgkQAXgKAVgKQBng1AAg/QAAhGh4g2QgbgNgigLQgbgKgdgHQgdgJgggGIBsg5QAmAKAkANQAdAKAbAMQAqASAiATQCbBXAAByQAABVhUBGIgHAFQgYARgeARQiRBTjoAiIgDAAIAAAAIhjAMQhRAHhSAAQg4AAhCgEg");
	this.shape_7.setTransform(-0.075,-31.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah5FJIgpgDIhjgLQisgZh9g0QgsgSgngWQg0gegjggQg7g9AAhHQAAiHDahiIANgFQCwhLDogSQBIgGBMABQAqAAAoABIgYBPIg5AAQg4AAg0ADQi6AKiNAwIgGADQiuA8AABWQAAA+BnA2QBCAhBeAWQAvAMA1AIIAFAAIBhAMIADAAQAmADAlACQAkABAkAAQA2ABA3gEIArgDIBdgLIAAAAQCFgUBbglQAXgJAVgKQBng2AAg+QAAhHh4g2QgbgMgigMQgbgJgdgIQgdgIgggGIBsg5QAmAKAkANQAdAKAbAMQAqASAiATQCbBXAAByQAABVhUBFIgHAGQgYARgeARQiRBTjoAiIgDAAIAAAAIhjALQhRAIhSAAQg4gBhCgEg");
	this.shape_8.setTransform(-0.075,-32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah5FJIgpgDIhjgLQisgZh9g0QgsgSgngWQg0gegjggQg7g9AAhHQAAiHDahiIANgFQCwhLDogSQBIgGBMABQAqAAAoABQBnAEBcAPIhMBGQhEgIhLgCIg5AAQg4AAg0ADQi6AKiNAwIgGADQiuA8AABWQAAA+BnA2QBCAhBeAWQAvAMA1AIIAFAAIBhAMIADAAQAmADAlACQAkABAkAAQA2ABA3gEIArgDIBdgLIAAAAQCFgUBbglQAXgJAVgKQBng2AAg+QAAhHh4g2QgbgMgigMQgbgJgdgIQgdgIgggGIBsg5QAmAKAkANQAdAKAbAMQAqASAiATQCbBXAAByQAABVhUBFIgHAGQgYARgeARQiRBTjoAiIgDAAIAAAAIhjALQhRAIhSAAQg4gBhCgEg");
	this.shape_9.setTransform(-0.075,-32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah5FJIgpgDIhjgLQisgZh9g0QgsgSgngWQg0gegjggQg7g9AAhHQAAiHDahiIANgFQCwhLDogSQBIgGBMABQAqAAAoABQBnAEBcAPQAsAHApAJIhfBAQgggGgigEQhEgIhLgCIg5AAQg4AAg0ADQi6AKiNAwIgGADQiuA8AABWQAAA+BnA2QBCAhBeAWQAvAMA1AIIAFAAIBhAMIADAAQAmADAlACQAkABAkAAQA2ABA3gEIArgDIBdgLIAAAAQCFgUBbglQAXgJAVgKQBng2AAg+QAAhHh4g2QgbgMgigMQgbgJgdgIQgdgIgggGIBsg5QAmAKAkANQAdAKAbAMQAqASAiATQCbBXAAByQAABVhUBFIgHAGQgYARgeARQiRBTjoAiIgDAAIAAAAIhjALQhRAIhSAAQg4gBhCgEg");
	this.shape_10.setTransform(-0.075,-32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah5FJIgpgDIhjgLQisgZh9g0QgsgSgngWQg0gegjggQg7g9AAhHQAAiHDahiIANgFQCwhLDogSQBIgGBMABQAqAAAoABQBnAEBcAPQAsAHApAJQAhAHAgAKQAmAKAkANQAdAKAbAMQAqASAiATQCbBXAAByQAABVhUBFIgHAGQgYARgeARQiRBTjoAiIgDAAIAAAAIhjALQhRAIhSAAQg4gBhCgEgAhrj5Qi6AKiNAwIgGADQiuA8AABWQAAA+BnA2QBCAhBeAWQAvAMA1AIIAFAAIBhAMIADAAQAmADAlACQAkABAkAAQA2ABA3gEIArgDIBdgLIAAAAQCFgUBbglQAXgJAVgKQBng2AAg+QAAhHh4g2QgbgMgigMQgbgJgdgIQgdgIgggGIg0gKQgggGgigEQhEgIhLgCIg5AAQg4AAg0ADg");
	this.shape_11.setTransform(-0.075,-32.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ao0I0QhkgnhZg4QiUhchRh3QhTh7AAiHIAAAAQAAiGBTh7QBRh3CUhcQBag4BlgnQCxhHDTgUQA1gFA3gCIBCgBIBDABQA3ACA1AFQDTAUCxBHQBlAnBaA4QCUBcBRB3QBTB7AACGIAAAAQAACHhTB7QhRB3iUBcQhZA4hkAnQj5Bjk8AAQk7AAj5hjgAEHgFIAAAdQAAB0gTBnQgMBGgVA/QgxCThMA7IgGAFIgBAAIABAAQADABgDAIQDogVC3hRQBfgrBRg7QDmioALjgIABgYQAAimh7iOIABAOIgDgFIAAAGQgBBUhUBGIgHAGQgYARgdARQiSBSjoAiIgCABIAAAAIACAAgAhOJLIgHgFQhNg7gwiTQgVg/gNhGQgShnAAh0IACgeIgCAAQisgZh9g0QgsgSgngWQg0gegiggQg8g9AAhHIAAgGIgCADIABgMQh8CPAAClIABAYQAMDgDlCoQBSA8BgApQC3BRDoANIAAAAgAiUCUQAMBDAYA3QAwBtBAAAQBBAAAwhtQAXg2ANhEQAMhCADhOQhSAHhSAAQg4AAhCgEIgpgDQACBOANBCgAgomRQgbARgYAnIgCADQgpBFgSBwIACAAIADABQAmADAlACQAlABAjAAQA2AAA3gDIArgEQgRhwgphFIgCgDQgYgngcgRQgTgMgVAAQgUAAgUAMgAA4opQAnASAkAuQALAQAMASQA2BYAbCFQAGAeAFAgIAAABQCFgUBaglQAXgJAVgLQBng1AAg/QAAhHh3g2QgcgMghgMQgcgJgcgIQgegIgggHIg0gKQgggFgigEQhEgIhLgCIg5gBQg3AAg1ADQi6ALiNAwIgFACQivA9AABWQAAA/BnA1QBCAiBeAWQAvALA1AIIAFABIAAAAQAFghAHgfQAciDA2hYQAMgTAMgPQAjguAngSQAbgNAcAAQAdAAAbANg");
	this.shape_12.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	// Layer_5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbhFQAbgNAcAAIAACZQgVAAgTAMg");
	this.shape_13.setTransform(-2.8125,-48.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhAggQAjguAmgTQAbgNAdAAIAACZQgVAAgUAMQgaAQgYAog");
	this.shape_14.setTransform(-6.5125,-45.6375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiCEcIAOitIAAAAQAFghAHgfQAciCA2hZQALgSALgPQAjguAngTQAcgNAdAAIAACaQgWAAgTAMQgbAQgYAoIgCADQgoBEgSBwIgLCig");
	this.shape_15.setTransform(-13.0625,-28.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiCC6IAOjEIAAAAQAGghAHgfQAciDA2hYQALgTALgPQAjguAngSQAbgNAeAAIAACZQgWAAgTAMQgbARgYAnIgCADQgoBFgTBvIgKCmQACBOAMBCIhfBfQgShnAAh0g");
	this.shape_16.setTransform(-13.15,-16.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA0I0QhQg5gyiaQgVg/gNhGQgShnAAh0IAOjEIAAAAQAGghAHgfQAciDA2hYQALgTALgPQAjguAngSQAbgNAeAAIAACZQgWAAgTAMQgbARgYAnIgCADQgoBFgTBwIgKCmQACBNAMBCQANBDAWA3QAwBtBCAAIAADqQgnAAgpgag");
	this.shape_17.setTransform(-13.15,2.3375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAJJOQglAAgpgaQhRg5gziaQgVg/gMhGQgThnAAh0IAPjEIAAAAQAGghAGgfQAdiDA2hYQALgTAMgPQAjguAngSQAbgNAcAAIAACZQgUAAgTAMQgbARgYAnIgCADQgpBFgTBwIgKCmQACBNAMBCQANBDAXA3QAwBtBAAAQBCAAAvhtQAYg3ANhDIBfBfQgNBGgVA/QgyCZhRA6IAAAAIAAAAQgmAagoAAIgCAAg");
	this.shape_18.setTransform(-0.9375,2.3382);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAJOQgmAAgogaQhRg5gziaQgVg/gMhGQgThnAAh0IAPjEIAAAAQAFghAHgfQAdiDA2hYQALgTAMgPQAjguAngSQAbgNAcAAIAACZQgUAAgUAMQgbARgXAnIgCADQgpBFgTBwIgKCmQABBNANBCQANBDAXA3QAwBtBAAAQBCAAAvhtQAYg3AMhDQANhCAChNIAAgEIBjAAIAAAXQAAB0gSBnQgNBGgVA/QgzCZhQA6IAAAAIAAAAQgmAagoAAIgCAAg");
	this.shape_19.setTransform(-0.025,2.3382);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAAJOQgnAAgogaQhSg5gyiaQgVg/gNhGQgShnAAh0IAPjEIAAAAQAFghAHgfQAciDA2hYQAMgTAMgPQAjguAngSQAbgNAdAAIAACZQgVAAgUAMQgbARgYAnIgCADQgpBFgSBwIgLCmQACBNANBCQAMBDAYA3QAwBtBBAAQBAAAAwhtQAXg3ANhDQAMhCADhNIgLieIBShRQAGAeAFAgIAAABIATCkIgCABIAAAAIACAAIgCABIAAAdQAAB0gTBnQgMBGgVA/QgzCZhQA6IgBAAIABAAQgmAagoAAIgBAAg");
	this.shape_20.setTransform(0.1,2.3382);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAJOQgnAAgogaQhSg5gyiaQgVg/gNhGQgShnAAh0IAPjEIAAAAQAFghAHgfQAciDA2hYQAMgTAMgPQAjguAngSQAbgNAdAAIAACZQgVAAgUAMQgbARgYAnIgCADQgpBFgSBwIgLCmQACBNANBCQAMBDAYA3QAwBtBBAAQBAAAAwhtQAXg3ANhDQAMhCADhNIgMimQgRhwgphFIgCgDIAniQQALAPAMATQA2BYAbCFQAGAeAFAgIAAABIATCkIgCABIAAAAIACAAIgCABIAAAdQAAB0gTBnQgMBGgVA/QgzCZhQA6IgBAAIABAAQgmAagoAAIgBAAg");
	this.shape_21.setTransform(0.1,2.3382);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAJOQgnAAgogaQhSg5gyiaQgVg/gNhGQgShnAAh0IAPjEIAAAAQAFghAHgfQAciDA2hYQAMgTAMgPQAjguAngSQAbgNAdAAIAACZQgVAAgUAMQgbARgYAnIgCADQgpBFgSBwIgLCmQACBNANBCQAMBDAYA3QAwBtBBAAQBAAAAwhtQAXg3ANhDQAMhCADhNIgMimQgRhwgphFIgCgDQgYgogcgQIAQiZQAnATAkAuQALAPAMATQA2BYAbCFQAGAeAFAgIAAABIATCkIgCABIAAAAIACAAIgCABIAAAdQAAB0gTBnQgMBGgVA/QgzCZhQA6IgBAAIABAAQgmAagoAAIgBAAg");
	this.shape_22.setTransform(0.1,2.3382);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAJOQgnAAgogaQhSg5gyiaQgVg/gNhGQgShnAAh0IAPjEIAAAAQAFghAHgfQAciDA2hYQAMgTAMgPQAjguAngSQAbgNAdAAQAcAAAbAMQAnATAkAuQALAPAMATQA2BYAbCFQAGAeAFAgIAAABIATCkIgCABIAAAAIACAAIgCABIAAAdQAAB0gTBnQgMBGgVA/QgzCZhQA6IgBAAIABAAQgmAagoAAIgBAAgAgpmoQgbARgYAnIgCADQgpBFgSBwIgLCmQACBNANBCQAMBDAYA3QAwBtBBAAQBAAAAwhtQAXg3ANhDQAMhCADhNIgMimQgRhwgphFIgCgDQgYgogcgQQgTgMgUAAQgVAAgUAMg");
	this.shape_23.setTransform(0.1,2.3382);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},4).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},5).wait(1));

	// Layer_7
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghATIAAgmIBCABIgEAmIg+gBg");
	this.shape_24.setTransform(3.35,-64.3125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAQIg/gBIAAgmIBDABQA2ACA0AFIgKAnQgygGgygCg");
	this.shape_25.setTransform(8.7375,-63.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ah1gYQgxgGg0gCIg/gBIAAgnIBDACQA3ACA1AFQDSAUCyBFIgvAuQifhKjBgWg");
	this.shape_26.setTransform(28.175,-59.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AF7FMIABgZQAAimh7iOIABANQg7hDhag9Qg8gnhAgfQighLjBgWQgxgGg0gCIg/gBIAAgnIBDACQA3ACA1AFQDTAUCwBGQBlAoBaA4QCUBcBRB1QBTB8AACHg");
	this.shape_27.setTransform(53.3,-33.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglIfQBegqBRg8QDminALjhIABgYQAAilh7iPIABAOQg7hFhag8Qg8gnhAgfQighLjBgWQgxgGg0gCIg/gBIAAgnIBDABQA3ACA1AFQDTAVCwBGQBlAoBaA4QCUBbBRB3QBTB8AACFIAAABQAACHhTB7QhRB3iUBcQhZA3hkAog");
	this.shape_28.setTransform(53.3,-4.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AoUJJQBTAAgDACIgBAAIABAAQADABgDAIQDogVC3hRQBegrBRg7QDmioALjgIABgYQAAimh7iOIABAOQg7hFhag8Qg8gohAgeQighMjBgWQgxgFg0gDIg/gBIAAgmIBDABQA3ACA1AFQDTAUCwBHQBlAnBaA4QCUBcBRB3QBTB7AACGIAAAAQAACHhTB7QhRB3iUBcQhZA4hkAnQj4Bjk8AAg");
	this.shape_29.setTransform(53.3,0.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AsvI0IBHhHQC4BRDnANIgGgFQApADAsAAIABAAQAsAAAqgDIgGAFIgBAAIABAAQADABgDAIQDngVC2hRQBggrBRg7QDlioAMjgIABgYQAAimh7iOIABAOQg8hFhag8Qg7gohBgeQighMjAgWQgygFgzgDIg/gBIAAgmIBDABQA3ACA1AFQDSAUCxBHQBlAnBaA4QCTBcBRB3QBUB7AACGIAAAAQAACHhUB7QhRB3iTBcQhZA4hkAnQj5Bjk7AAQk8AAj6hjg");
	this.shape_30.setTransform(25.025,0.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ao0I0QhkgnhZg4QiUhchRh3QhTh7AAiHIAAAAICZAAQAMDgDlCoQBSA8BgApQC3BRDoANIgHgFQAqADArAAIAAAAQAsAAAqgDIgGAFIgBAAIABAAQADABgDAIQDogVC3hRQBfgrBRg7QDmioALjgIABgYQAAimh7iOIABAOQg7hFhag8Qg8gohBgeQighMjBgWQgxgFg0gDIg/gBIAAgmIBDABQA3ACA1AFQDTAUCxBHQBlAnBaA4QCUBcBRB3QBTB7AACGIAAAAQAACHhTB7QhRB3iUBcQhZA4hkAnQj5Bjk8AAQk7AAj5hjg");
	this.shape_31.setTransform(0,0.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ao0I0QhkgnhZg4QiUhchRh3QhTh7AAiHIAAAAQAAiGBTh7QBRh3CUhcQBag4BlgnIAtAtQhBAfg8AoQhZA7g7BEIABgMQh8CPAAClIABAYQAMDgDlCoQBSA8BgApQC3BRDoANIgHgFQAqADArAAIAAAAQAsAAAqgDIgGAFIgBAAIABAAQADABgDAIQDogVC3hRQBfgrBRg7QDmioALjgIABgYQAAimh7iOIABAOQg7hFhag8Qg8gohBgeQighMjBgWQgxgFg0gDIg/gBIAAgmIBDABQA3ACA1AFQDTAUCxBHQBlAnBaA4QCUBcBRB3QBTB7AACGIAAAAQAACHhTB7QhRB3iUBcQhZA4hkAnQj5Bjk8AAQk7AAj5hjg");
	this.shape_32.setTransform(0,0.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ao0I0QhkgnhZg4QiUhchRh3QhTh7AAiHIAAAAQAAiGBTh7QBRh3CUhcQBag4BlgnQCxhHDTgUIALAnQjCAWigBLQhBAfg8AoQhZA7g7BEIABgMQh8CPAAClIABAYQAMDgDlCoQBSA8BgApQC3BRDoANIgHgFQAqADArAAIAAAAQAsAAAqgDIgGAFIgBAAIABAAQADABgDAIQDogVC3hRQBfgrBRg7QDmioALjgIABgYQAAimh7iOIABAOQg7hFhag8Qg8gohBgeQighMjBgWQgxgFg0gDIg/gBIAAgmIBDABQA3ACA1AFQDTAUCxBHQBlAnBaA4QCUBcBRB3QBTB7AACGIAAAAQAACHhTB7QhRB3iUBcQhZA4hkAnQj5Bjk8AAQk7AAj5hjg");
	this.shape_33.setTransform(0,0.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ao0I0QhkgnhZg4QiUhchRh3QhTh7AAiHIAAAAQAAiGBTh7QBRh3CUhcQBag4BlgnQCxhHDTgUQA1gFA3gCIAEAmQg0ADgxAFQjCAWigBLQhBAfg8AoQhZA7g7BEIABgMQh8CPAAClIABAYQAMDgDlCoQBSA8BgApQC3BRDoANIgHgFQAqADArAAIAAAAQAsAAAqgDIgGAFIgBAAIABAAQADABgDAIQDogVC3hRQBfgrBRg7QDmioALjgIABgYQAAimh7iOIABAOQg7hFhag8Qg8gohBgeQighMjBgWQgxgFg0gDIg/gBIAAgmIBDABQA3ACA1AFQDTAUCxBHQBlAnBaA4QCUBcBRB3QBTB7AACGIAAAAQAACHhTB7QhRB3iUBcQhZA4hkAnQj5Bjk8AAQk7AAj5hjg");
	this.shape_34.setTransform(0,0.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ao0I0QhkgnhZg4QiUhchRh3QhTh7AAiHIAAAAQAAiGBTh7QBRh3CUhcQBag4BlgnQCxhHDTgUQA1gFA3gCIBCgBIBDABQA3ACA1AFQDTAUCxBHQBlAnBaA4QCUBcBRB3QBTB7AACGIAAAAQAACHhTB7QhRB3iUBcQhZA4hkAnQj5Bjk8AAQk7AAj5hjgABQJLIgBAAIABAAQADABgDAIQDogVC3hRQBfgrBRg7QDmioALjgIABgYQAAimh7iOIABAOQg7hFhag8Qg8gohBgeQighMjBgWQgxgFg0gDIg/gBIAAAAIg+ABQg0ADgxAFQjCAWigBLQhBAfg8AoQhZA7g7BEIABgMQh8CPAAClIABAYQAMDgDlCoQBSA8BgApQC3BRDoANIgHgFQAqADArAAIAAAAQAsAAAqgDIgGAFg");
	this.shape_35.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[]},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.6,-66.3,213.2,132.7);


(lib.Symbol25copy5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AAAAHIgJARIgIgGIAMgPIgTgEIADgKIASAIIgBgUIAJAAIgCAUIATgIIADAKIgUAEIAOAPIgJAGg");
	this.shape.setTransform(46.1,-4.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AA5BlIAAgmIhyAAIAAAmIgPAAIAAg2IAKAAQAEAAAFgGQADgEADgJQAEgJABgLIALhsIBVAAIAACTIATAAIAAA2gAgZAJQgCAPgEALQgDAJgFADIBMAAIAAiDIg0AAg");
	this.shape_1.setTransform(33.95,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AAxBSIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjg");
	this.shape_2.setTransform(17.475,5.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgxBSIAAijIAtAAQARABAMAGQANAGAGALQAGALAAAQQAAANgGAMQgGALgNAHQgMAIgRAAIgcAAIAAA9gAggAGIAaAAQAKAAAJgFQAJgDAFgIQAFgJAAgLQAAgNgFgIQgFgIgJgDQgJgDgKAAIgaAAg");
	this.shape_3.setTransform(2.475,5.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("Ag0BSIAAijIBWAAIAAAQIhFAAIAAA2IAkAAQAaAAANAMQANAMAAAVQAAAOgGALQgFALgMAGQgMAGgRAAgAgjBDIAiAAQASAAAJgJQAJgIAAgQQAAgQgJgHQgKgIgRAAIgiAAg");
	this.shape_4.setTransform(-11.275,5.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_5.setTransform(-22.225,5.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgsBSIAAijIBZAAIAAAQIhIAAIAACTg");
	this.shape_6.setTransform(-30.525,5.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AAxBnIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjgAgYhSQgJgHgBgMIAMAAQABAHAGAEQAGADAJAAQAKAAAGgDQAGgEABgHIAMAAQgBAMgJAHQgKAGgPABQgPgBgJgGg");
	this.shape_7.setTransform(-52.325,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AAxBSIAAiIIhhCIIgRAAIAAijIASAAIAACIIBgiIIARAAIAACjg");
	this.shape_8.setTransform(-70.175,5.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AAvBSIAAhKIhcAAIAABKIgSAAIAAijIASAAIAABKIBcAAIAAhKIAQAAIAACjg");
	this.shape_9.setTransform(-87.85,5.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("Ag0BSIAAijIARAAIAABGIAkAAQAaAAANAMQANAMAAAVQAAAOgGALQgFALgMAGQgMAGgRAAgAgjBDIAiAAQASAAAJgJQAJgIAAgQQAAgQgJgHQgKgIgRAAIgiAAg");
	this.shape_10.setTransform(-102.925,5.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("Ag6BRIgGgBIADgQIAFACIAGABQAGAAADgFQAEgFABgLIAMiAIBZAAIAACjIgSAAIAAiSIg4AAIgLB1QgBAPgHAHQgHAIgOAAIgJgBg");
	this.shape_11.setTransform(-119.425,5.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgtBSIAAijIBZAAIAAAQIhHAAIAAA6IBFAAIAAAOIhFAAIAAA7IBJAAIAAAQg");
	this.shape_12.setTransform(-132.275,5.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("Ag6BRIgGgBIADgQIAFACIAGABQAGAAADgFQAEgFABgLIAMiAIBZAAIAACjIgSAAIAAiSIg4AAIgLB1QgBAPgHAHQgHAIgOAAIgJgBg");
	this.shape_13.setTransform(-148.025,5.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AA2BSIgUg1IhDAAIgUA1IgSAAIA/ijIARAAIA/CjgAAcAOIgchLIgcBLIA4AAg");
	this.shape_14.setTransform(-162.125,5.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgxBSIAAijIAtAAQARABAMAGQANAGAGALQAGALAAAQQAAANgGAMQgGALgNAHQgMAIgRAAIgcAAIAAA9gAggAGIAaAAQAKAAAJgFQAJgDAFgIQAFgJAAgLQAAgNgFgIQgFgIgJgDQgJgDgKAAIgaAAg");
	this.shape_15.setTransform(-175.875,5.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AA2BSIgUg1IhDAAIgUA1IgSAAIA/ijIARAAIA/CjgAAcAOIgchLIgcBLIA4AAg");
	this.shape_16.setTransform(-190.875,5.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AAtBSIAAiTIhZAAIAACTIgSAAIAAijIB8AAIAACjg");
	this.shape_17.setTransform(-207.2,5.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.8,-15.2,269.1,36.9);


(lib.Symbol24copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("ABIB/IAAgwIiPAAIAAAwIgUAAIAAhEIAMAAQAGAAAFgGQAFgHAEgLQAEgLABgOIAPiIIBrAAIAAC5IAYAAIAABEgAghALQgCAUgEAMQgEANgGADIBfAAIAAilIhBAAg");
	this.shape.setTransform(5.075,5.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AA9BnIAAirIh6CrIgVAAIAAjNIAWAAIAACrIB6irIAVAAIAADNg");
	this.shape_1.setTransform(-15.675,2.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("Ag+BnIAAjNIA5AAQAVABAQAHQAPAIAIAOQAIAOAAAUQAAARgIAOQgIAOgPAKQgQAJgVAAIgkAAIAABNgAgpAHIAhAAQANAAALgGQAMgEAGgKQAHgLAAgOQAAgRgHgKQgGgJgMgFQgLgEgNAAIghAAg");
	this.shape_2.setTransform(-34.525,2.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AhCBnIAAjNIBsAAIAAAUIhXAAIAABEIAtAAQAjABAPAOQARAPAAAbQAAARgIAOQgHAOgOAIQgPAHgXAAgAgtBUIArAAQAXAAALgLQAMgKAAgUQAAgUgMgJQgMgKgWAAIgrAAg");
	this.shape_3.setTransform(-51.85,2.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBnIAAjNIAVAAIAADNg");
	this.shape_4.setTransform(-65.675,2.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("Ag4BnIAAjNIBxAAIAAAUIhbAAIAAC5g");
	this.shape_5.setTransform(-76.175,2.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-22.7,121.69999999999999,45.4);


(lib.Symbol24_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgKCCIAAjNIAUAAIAADNgAAUhoQgDgEgBgGQABgGADgEQAEgEAHgBQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgHAAgEgEgAgohoQgEgEAAgGQAAgGAEgEQAEgEAGgBQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_15.setTransform(185.975,0.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBnIAAjNIAVAAIAADNg");
	this.shape_16.setTransform(177.725,2.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AglBcQgYgNgOgZQgNgYAAgeQAAgfANgXQAPgYAXgNQAYgNAegBQAUAAASAGQARAHAOAKIgIAUQgMgKgQgGQgPgGgSAAQgXAAgTALQgTALgLATQgLATAAAYQAAAZALASQALAUATALQATALAXAAQAUAAAQgGQARgHANgKIAGAUQgQAMgRAGQgTAGgUAAQgegBgYgNg");
	this.shape_17.setTransform(163.35,2.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("Ag+BnIAAjNIA5AAQAVABAQAHQAPAIAIAOQAIAOAAAUQAAARgIAOQgIAOgPAKQgQAJgVAAIgkAAIAABNgAgpAHIAhAAQANAAALgGQAMgEAGgKQAHgLAAgOQAAgRgHgKQgGgJgMgFQgLgEgNAAIghAAg");
	this.shape_18.setTransform(144.925,2.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("Ag4BnIAAjNIBvAAIAAAUIhaAAIAABJIBXAAIAAASIhXAAIAABKIBdAAIAAAUg");
	this.shape_19.setTransform(127.6,2.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AhBBnIAAjNIA5AAQAcAAAQAOQAQAOABAZQAAAOgHALQgGAMgPAIQATAEALANQALAMAAAUQAAASgHANQgIAMgOAIQgOAHgUAAgAgsBUIAtAAQAVAAALgLQALgLAAgSQAAgRgLgJQgKgJgTgBIgwAAgAgsgJIAmAAQALAAAIgGQAJgFAFgIQAFgJAAgKQAAgRgLgJQgLgJgTgBIgjAAg");
	this.shape_20.setTransform(110.575,2.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AA9CBIAAirIh6CrIgVAAIAAjNIAWAAIAACrIB6irIAVAAIAADNgAgfhoQgMgIgBgQIAQAAQABAKAIAEQAIAEALAAQANAAAHgEQAHgEABgKIAQAAQgBAQgMAIQgMAJgTAAQgUAAgLgJg");
	this.shape_21.setTransform(82.175,0.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBnIAAjNIAVAAIAADNg");
	this.shape_22.setTransform(66.775,2.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AA6BnIAAhdIh0AAIAABdIgVAAIAAjNIAVAAIAABdIB0AAIAAhdIAWAAIAADNg");
	this.shape_23.setTransform(51.7,2.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("ABIB/IAAgwIiPAAIAAAwIgUAAIAAhEIAMAAQAGAAAFgGQAFgHAEgLQAEgLABgOIAPiIIBrAAIAAC5IAYAAIAABEgAghALQgCAUgEAMQgEANgGADIBfAAIAAilIhBAAg");
	this.shape_24.setTransform(30.525,5.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("AA9BnIAAirIh6CrIgVAAIAAjNIAWAAIAACrIB6irIAVAAIAADNg");
	this.shape_25.setTransform(9.775,2.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("Ag+BnIAAjNIA5AAQAVABAQAHQAPAIAIAOQAIAOAAAUQAAARgIAOQgIAOgPAKQgQAJgVAAIgkAAIAABNgAgpAHIAhAAQANAAALgGQAMgEAGgKQAHgLAAgOQAAgRgHgKQgGgJgMgFQgLgEgNAAIghAAg");
	this.shape_26.setTransform(-9.075,2.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AhCBnIAAjNIBtAAIAAAUIhYAAIAABEIAtAAQAjABAQAOQAQAPAAAbQAAARgHAOQgIAOgOAIQgPAHgXAAgAgtBUIAsAAQAWAAAMgLQAMgKgBgUQAAgUgMgJQgMgKgVAAIgsAAg");
	this.shape_27.setTransform(-26.4,2.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBnIAAjNIAVAAIAADNg");
	this.shape_28.setTransform(-40.225,2.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("Ag4BnIAAjNIBxAAIAAAUIhbAAIAAC5g");
	this.shape_29.setTransform(-50.725,2.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AhBBnIAAjNIA5AAQAcAAAQAOQAQAOABAZQAAAOgHALQgGAMgPAIQATAEALANQALAMAAAUQAAASgHANQgIAMgOAIQgOAHgUAAgAgsBUIAtAAQAVAAALgLQALgLAAgSQAAgRgLgJQgKgJgTgBIgwAAgAgsgJIAmAAQALAAAIgGQAJgFAFgIQAFgJAAgKQAAgRgLgJQgLgJgTgBIgjAAg");
	this.shape_30.setTransform(-75.225,2.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-22.7,296.5,45.4);


(lib.Symbol23copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AAuBnIg3hWIgFAAIgjAAIAABWIgWAAIAAjNIA7AAQAeAAARAQQARAQAAAbQAAAUgLAPQgKAOgUAHIA9BagAgxAAIAiAAQAMgBAKgDQAKgFAHgJQAGgKAAgPQAAgOgGgJQgHgJgKgEQgJgEgMAAIgjAAg");
	this.shape.setTransform(78.375,2.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("Ag4BnIAAjNIBvAAIAAAUIhaAAIAABJIBXAAIAAASIhXAAIAABKIBdAAIAAAUg");
	this.shape_1.setTransform(60.2,2.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBkQgRgFgNgJIAGgWQANAKAPAGQAQAGAQAAQATAAAMgJQAMgKAAgSQAAgMgGgGQgGgIgKgFIgYgKQgPgFgOgGQgNgHgHgLQgJgLAAgRQAAgSAJgMQAIgMAOgIQAQgGASAAQAPAAAOAEQAOAEAKAFIgEAUQgKgFgOgFQgNgDgOAAQgSgBgLAKQgMAJgBAQQABALAFAIQAGAHALAFQAKAGAMAEIAeALQANAGAIALQAIALAAASQAAAUgIANQgIAMgQAHQgPAHgSAAQgTAAgQgGg");
	this.shape_2.setTransform(42.95,2.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBnIAAjNIAVAAIAADNg");
	this.shape_3.setTransform(30.425,2.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBeQgSgJgJgSQgJgSAAgXIAAiCIAWAAIAAB+QAAAVAHAOQAHANANAHQANAGAQAAQARAAANgGQAMgHAIgNQAHgOAAgVIAAh+IAWAAIAACCQAAAXgJASQgKASgSAJQgRAKgZAAQgYAAgSgKg");
	this.shape_4.setTransform(15.625,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AAuBnIg3hWIgFAAIgjAAIAABWIgWAAIAAjNIA7AAQAeAAARAQQARAQAAAbQAAAUgLAPQgKAOgUAHIA9BagAgxAAIAiAAQAMgBAKgDQAKgFAHgJQAGgKAAgPQAAgOgGgJQgHgJgKgEQgJgEgMAAIgjAAg");
	this.shape_5.setTransform(-3.325,2.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AglBcQgYgNgNgZQgOgYgBgeQABgfAOgXQAOgYAYgNQAXgNAegBQAUAAASAGQARAHAOAKIgHAUQgNgKgPgGQgQgGgSAAQgXAAgUALQgSALgLATQgLATAAAYQAAAZALASQALAUASALQAUALAXAAQAUAAAQgGQARgHAMgKIAHAUQgPAMgTAGQgRAGgVAAQgegBgYgNg");
	this.shape_6.setTransform(-23.8,2.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AhUBnIAAjNIBBAAQAfAAAYANQAYANAMAWQANAXAAAfQAAAegNAXQgMAYgYANQgYANgfAAgAg/BTIAqAAQAaAAATgKQASgLALgTQAKgSAAgZQAAgZgKgTQgLgSgSgKQgTgKgZAAIgrAAg");
	this.shape_7.setTransform(-52.65,2.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AA+BnIh6iqIAACqIgWAAIAAjNIAVAAIB6CrIAAirIAWAAIAADNg");
	this.shape_8.setTransform(-75.375,2.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("ABEBnIgahDIhUAAIgZBDIgXAAIBPjNIAXAAIBPDNgAAkASIgkhfIgkBfIBIAAg");
	this.shape_9.setTransform(-96.3,2.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("Ag4BnIAAjNIAWAAIAAC5IBbAAIAAAUg");
	this.shape_10.setTransform(-112.225,2.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-22.7,211.7,45.4);


(lib.Symbol23_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("Ag+BnIAAjNIA5AAQAVABAQAHQAPAIAIAOQAIAOAAAUQAAARgIAOQgIAOgPAKQgQAJgVAAIgkAAIAABNgAgpAHIAhAAQANAAALgGQAMgEAGgKQAHgLAAgOQAAgRgHgKQgGgJgMgFQgLgEgNAAIghAAg");
	this.shape_10.setTransform(219.575,2.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("Ag5BnIAAjNIBwAAIAAAUIhaAAIAABJIBYAAIAAASIhYAAIAABKIBcAAIAAAUg");
	this.shape_11.setTransform(202.25,2.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AA4BnIAAi5IhwAAIAAC5IgWAAIAAjNICdAAIAADNg");
	this.shape_12.setTransform(182.65,2.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("Ag5BnIAAjNIBwAAIAAAUIhaAAIAABJIBXAAIAAASIhXAAIAABKIBdAAIAAAUg");
	this.shape_13.setTransform(163.8,2.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBnIAAi5Ig6AAIAAgUICHAAIAAAUIg4AAIAAC5g");
	this.shape_14.setTransform(147.475,2.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("ABIB/IAAgwIiPAAIAAAwIgUAAIAAhEIAMAAQAGAAAFgGQAFgHAEgLQAEgLABgOIAPiIIBrAAIAAC5IAYAAIAABEgAghALQgCAUgEAMQgEANgGADIBfAAIAAilIhBAAg");
	this.shape_15.setTransform(129.725,5.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBnIAAjNIAVAAIAADNg");
	this.shape_16.setTransform(116.075,2.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AhBBnIAAjNIA5AAQAcAAAQAOQAQAOABAZQAAAOgHALQgGAMgPAIQATAEALANQALAMAAAUQAAASgHANQgIAMgOAIQgOAHgUAAgAgsBUIAtAAQAVAAALgLQALgLAAgSQAAgRgLgJQgKgJgTgBIgwAAgAgsgJIAmAAQALAAAIgGQAJgFAFgIQAFgJAAgKQAAgRgLgJQgLgJgTgBIgjAAg");
	this.shape_17.setTransform(103.725,2.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAuBnIg3hWIgFAAIgjAAIAABWIgWAAIAAjNIA7AAQAeAAARAQQARAQAAAbQAAAUgLAPQgKAOgUAHIA9BagAgxAAIAiAAQAMgBAKgDQAKgFAHgJQAGgKAAgPQAAgOgGgJQgHgJgKgEQgJgEgMAAIgjAAg");
	this.shape_18.setTransform(78.375,2.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag4BnIAAjNIBvAAIAAAUIhaAAIAABJIBXAAIAAASIhXAAIAABKIBdAAIAAAUg");
	this.shape_19.setTransform(60.2,2.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjBkQgRgFgNgJIAGgWQANAKAPAGQAQAGAQAAQATAAAMgJQAMgKAAgSQAAgMgGgGQgGgIgKgFIgYgKQgPgFgOgGQgNgHgHgLQgJgLAAgRQAAgSAJgMQAIgMAOgIQAQgGASAAQAPAAAOAEQAOAEAKAFIgEAUQgKgFgOgFQgNgDgOAAQgSgBgLAKQgMAJgBAQQABALAFAIQAGAHALAFQAKAGAMAEIAeALQANAGAIALQAIALAAASQAAAUgIANQgIAMgQAHQgPAHgSAAQgTAAgQgGg");
	this.shape_20.setTransform(42.95,2.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKBnIAAjNIAVAAIAADNg");
	this.shape_21.setTransform(30.425,2.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqBeQgSgJgJgSQgJgSAAgXIAAiCIAWAAIAAB+QAAAVAHAOQAHANANAHQANAGAQAAQARAAANgGQAMgHAIgNQAHgOAAgVIAAh+IAWAAIAACCQAAAXgJASQgKASgSAJQgRAKgZAAQgYAAgSgKg");
	this.shape_22.setTransform(15.625,3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAuBnIg3hWIgFAAIgjAAIAABWIgWAAIAAjNIA7AAQAeAAARAQQARAQAAAbQAAAUgLAPQgKAOgUAHIA9BagAgxAAIAiAAQAMgBAKgDQAKgFAHgJQAGgKAAgPQAAgOgGgJQgHgJgKgEQgJgEgMAAIgjAAg");
	this.shape_23.setTransform(-3.325,2.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglBcQgYgNgNgZQgOgYgBgeQABgfAOgXQAOgYAYgNQAXgNAegBQAUAAASAGQARAHAOAKIgHAUQgNgKgPgGQgQgGgSAAQgXAAgUALQgSALgLATQgLATAAAYQAAAZALASQALAUASALQAUALAXAAQAUAAAQgGQARgHAMgKIAHAUQgPAMgTAGQgRAGgVAAQgegBgYgNg");
	this.shape_24.setTransform(-23.8,2.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhUBnIAAjNIBBAAQAfAAAYANQAYANAMAWQANAXAAAfQAAAegNAXQgMAYgYANQgYANgfAAgAg/BTIAqAAQAaAAATgKQASgLALgTQAKgSAAgZQAAgZgKgTQgLgSgSgKQgTgKgZAAIgrAAg");
	this.shape_25.setTransform(-52.65,2.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA+BnIh6iqIAACqIgWAAIAAjNIAVAAIB6CrIAAirIAWAAIAADNg");
	this.shape_26.setTransform(-75.375,2.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABEBnIgahDIhUAAIgZBDIgXAAIBPjNIAXAAIBPDNgAAkASIgkhfIgkBfIBIAAg");
	this.shape_27.setTransform(-96.3,2.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag4BnIAAjNIAWAAIAAC5IBbAAIAAAUg");
	this.shape_28.setTransform(-112.225,2.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-22.7,352.3,45.4);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3001D").s().p("ApwAoIAAhPIThAAIAABPg");
	this.shape.setTransform(233.55,-532.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(171.1,-536.5,125.00000000000003,8);


(lib.Symbol7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhmCYQgwgMgkgYQglgWgUgeQgVgfAAghQAAggAVgfQAUgeAlgWQAkgYAwgMQAxgNA1AAQA2AAAxANQAwAMAkAYQAlAWAUAeQAVAfAAAgQAAAhgVAfQgUAeglAWQgkAYgwAMQgxANg2AAQg1AAgxgNgADEhNQAAAaglAVQgjAUg7AJIABAHQgBAwgNAoQgMAmgUAOQAqgCAngNQAlgNAdgVQAdgUAPgbQAQgaAAgdQAAgVgIgUQgIgTgPgRIAAAFgAgTCSQgUgOgMgmQgNgogBgwIABgHQg7gJgjgUQglgVAAgaIAAgFQgPARgIATQgIAUAAAVQAAAdAQAaQAPAbAdAUQAdAVAlANQAnANAqACIAAAAgAgbBDQAMAbAPAAQAQAAAMgbQAMgbAAgnQgTABgVABQgUgBgUgBQABAnAMAbgAgWhVQgKASgFAbQATACASAAQAUAAASgCQgEgbgLgSQgKgRgNAAQgMAAgKARgAAmhwQARAbAGArQApgGAagNQAZgNAAgQQAAgKgMgLQgMgJgUgHQgugPg/AAQg+AAguAPQgUAHgMAJQgMALAAAKQAAAQAZANQAaANApAGQAGgrARgbQARgcAUAAQAVAAARAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-16.5,53,33);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282830").s().p("A6tWMMAAAgsXMA1bAAAMAAAAsXg");
	this.shape.setTransform(20.95,-158.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,342,284);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// light_png
	this.instance = new lib.Tween33("synched",0);
	this.instance.setTransform(-158.05,70.35);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},34).to({alpha:1},4).to({alpha:0},3).to({alpha:1},4).to({alpha:0},9).to({startPosition:0},181).to({startPosition:0},1).to({alpha:1},4).to({alpha:0},3).to({alpha:1},4).to({alpha:0},9).to({startPosition:0},43).to({_off:true},1).wait(21));

	// car_jpg
	this.instance_1 = new lib.Tween37("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},299).to({_off:true},1).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-708,-850.5,840,747);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(0,25.05);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},17,cjs.Ease.sineOut).to({startPosition:0},53).to({_off:true},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-16.2,120.69999999999999,57.5);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(2.9,33.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2.5,alpha:1},14,cjs.Ease.sineOut).to({startPosition:0},56).to({_off:true},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-18.1,169.5,72.1);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(-8,32);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({startPosition:0},60).to({_off:true},1).wait(19));

	// Layer_1
	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.setTransform(-9.95,-75.05);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).to({startPosition:0},56).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.7,-6.9,237.4,76.30000000000001);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.instance = new lib.Symbol24("synched",0);
	this.instance.setTransform(-7.55,-0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:-36.05,alpha:1},12,cjs.Ease.cubicOut).wait(10).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol23("synched",0);
	this.instance_1.setTransform(28.5,-35.35);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0,alpha:1},12,cjs.Ease.cubicOut).wait(13).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-58,336,114.1);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(40.4,-0.7,0.1136,0.0763);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,x:40.45},7,cjs.Ease.backOut).wait(10));

	// Layer_3
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(35.95,-0.7,0.5263,0.0763);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(11));

	// Layer_4
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(31.4,-0.7,0.0962,0.0763);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(12));

	// Layer_5
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(24,-0.75,0.073,0.0746);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(13));

	// Layer_6
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(17.3,-0.7,0.1176,0.0763);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:17.35},7,cjs.Ease.backOut).wait(14));

	// Layer_7
	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(-32.45,-0.75,0.073,0.0746);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(15));

	// Layer_8
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(-39.5,0.05,0.08,0.0617);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-4.4,85.8,8.9);


(lib.prog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol11("synched",0);
	this.instance.setTransform(44.95,21.65);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({alpha:1},8).wait(61).to({startPosition:0},0).to({_off:true},1).wait(44));

	// Layer_2
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.setTransform(28.35,-1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({alpha:1},8).wait(64).to({startPosition:0},0).to({_off:true},1).wait(44));

	// Layer_3
	this.instance_2 = new lib.Symbol9("synched",0);
	this.instance_2.setTransform(51.95,-21.65);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},8).wait(67).to({startPosition:0},0).to({_off:true},1).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-53.6,145.9,96.6);


(lib.pic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Tween32("synched",0);
	this.instance.setTransform(717.95,713.45,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:685.45,startPosition:74},74).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:502.5,y:605.1,startPosition:201},127,cjs.Ease.sineOut).to({regX:0.2,scaleX:0.48,scaleY:0.48,x:477.75,y:586.35,startPosition:299},98,cjs.Ease.sineOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.1,33.1,704.5,597.6);


(lib.newcamry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy_copy1
	this.instance = new lib.Symbol25copy5("synched",0);
	this.instance.setTransform(-62.3,35.85);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(406));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280.1,20.6,269.1,36.9);


(lib.legal1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Tween9("synched",0);
	this.instance.setTransform(136.8,33.05);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).to({alpha:1},10).to({startPosition:0},68).to({_off:true},1).wait(12));

	// Layer_1
	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(136.8,42.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).to({startPosition:0},54).to({alpha:0},10).to({_off:true},1).wait(85));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,5.9,302.59999999999997,76.19999999999999);


(lib.Symbol22copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy1
	this.instance = new lib.Symbol24copy("synched",0);
	this.instance.setTransform(-7.55,-0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:-36.05,alpha:1},12,cjs.Ease.cubicOut).wait(10).to({startPosition:0},0).wait(1));

	// Layer_11
	this.instance_1 = new lib.Symbol23copy("synched",0);
	this.instance_1.setTransform(28.5,-35.35);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0,alpha:1},12,cjs.Ease.cubicOut).wait(13).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-58,240.2,116.6);


(lib.Symbol22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.instance_2 = new lib.Symbol24_1("synched",0);
	this.instance_2.setTransform(-7.55,-0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({x:-36.05,alpha:1},12,cjs.Ease.cubicOut).wait(10).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_3 = new lib.Symbol23_1("synched",0);
	this.instance_3.setTransform(28.5,-35.35);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:0,alpha:1},12,cjs.Ease.cubicOut).wait(13).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-58,380.79999999999995,116.6);


(lib.all_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// new_camry
	this.instance = new lib.newcamry("synched",0);
	this.instance.setTransform(-35.3,1.7,1,1,0,0,0,-191.6,52.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(449).to({startPosition:29},0).to({_off:true},1).wait(457));

	// txt3
	this.instance_1 = new lib.Symbol22copy("synched",0,false);
	this.instance_1.setTransform(-20.55,234.65,0.84,0.84);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({_off:true},126).wait(601));

	// txt2
	this.instance_2 = new lib.Symbol22("synched",0,false);
	this.instance_2.setTransform(-19.05,236.05,0.84,0.84);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).wait(82).to({startPosition:25},0).to({alpha:0},8).to({_off:true},1).wait(727));

	// txt1
	this.instance_3 = new lib.Symbol22_1("synched",0,false);
	this.instance_3.setTransform(-19.05,236.5,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({startPosition:25},0).to({alpha:0},9).to({_off:true},1).wait(818));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.2,-29.8,326.7,321.1);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_10
	this.instance = new lib.prog("synched",0);
	this.instance.setTransform(37.5,-3.05,0.7876,0.7876,0,0,0,50.6,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({startPosition:68},0).to({alpha:0,startPosition:75},7).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol8("synched",0,false);
	this.instance_1.setTransform(-73.95,-0.25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(56).to({startPosition:22},0).to({alpha:0},7).wait(1));

	// Layer_7
	this.instance_2 = new lib.Symbol5("synched",0);
	this.instance_2.setTransform(-57.95,-1,0.0443,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({scaleX:1,x:-42.4},6,cjs.Ease.cubicOut).wait(50).to({startPosition:0},0).to({alpha:0},7).wait(1));

	// Layer_8
	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.setTransform(-58.7,-1.65);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},12,cjs.Ease.cubicOut).wait(52).to({startPosition:0},0).to({alpha:0},7).wait(1));

	// Layer_9
	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.setTransform(-98.8,-1.65);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},12,cjs.Ease.cubicOut).wait(56).to({startPosition:0},0).to({alpha:0},7).wait(1));

	// Layer_5
	this.instance_5 = new lib.Symbol7("synched",0);
	this.instance_5.setTransform(-119.5,-1,0.0107,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({regX:-4.3,regY:-0.1,scaleX:0.0116,y:-1.1},1).to({regX:-2.7,scaleX:0.0184,x:-119.2},1).to({regX:-1.4,scaleX:0.0367,x:-118.35},1).to({regX:0,regY:0,scaleX:0.0725,x:-116.6,y:-1},1).to({regX:-0.4,regY:-0.1,scaleX:0.1314,x:-113.9,y:-1.1},1).to({regX:-0.2,scaleX:0.2193,x:-109.75},1).to({regX:0,regY:0,scaleX:0.342,x:-103.95,y:-1},1).to({scaleX:0.5052,x:-96.3},1).to({scaleX:0.6685,x:-88.65},1).wait(57).to({startPosition:0},0).to({alpha:0},7).wait(1));

	// Layer_6
	this.instance_6 = new lib.Symbol6("synched",0);
	this.instance_6.setTransform(-26.6,-8.45,0.1039,0.1039);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:-31.15,y:-10.6},5,cjs.Ease.cubicOut).wait(44).to({startPosition:0},0).to({alpha:0},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-41.1,215,76);


(lib.anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_433 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(433).call(this.frame_433).wait(17));

	// red_line
	this.instance = new lib.Symbol20("synched",0);
	this.instance.setTransform(-456,237);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:1.7518,x:-280.7},20,cjs.Ease.cubicOut).wait(430));

	// toyotaua
	this.instance_1 = new lib.Symbol33("synched",0);
	this.instance_1.setTransform(18.8,-96.3,0.9327,0.9327,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(379).to({_off:false},0).wait(71));

	// official
	this.instance_2 = new lib.Symbol32("synched",0);
	this.instance_2.setTransform(15.9,-127.05,0.8247,0.8247);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(379).to({_off:false},0).wait(71));

	// test_drive
	this.instance_3 = new lib.Symbol27("synched",0);
	this.instance_3.setTransform(24.8,-210.85,0.7979,0.7979);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(379).to({_off:false},0).wait(71));

	// legal
	this.instance_4 = new lib.legal1("synched",0);
	this.instance_4.setTransform(18.2,-67,1,1,0,0,0,136.8,42.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(298).to({_off:false},0).wait(152));

	// logo
	this.instance_5 = new lib.Symbol29("synched",0,false);
	this.instance_5.setTransform(19.5,-247.95,0.23,0.23,0,0,0,0.5,-1.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(298).to({_off:false},0).wait(152));

	// ten_years
	this.instance_6 = new lib.Symbol2("synched",0,false);
	this.instance_6.setTransform(33.1,-160.55,1.0853,1.0853,0,0,0,0.1,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(300).to({_off:false},0).wait(150));

	// grey
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(289).to({_off:false},0).to({alpha:1},11).wait(150));

	// txt
	this.instance_8 = new lib.all_text("synched",0);
	this.instance_8.setTransform(-45.8,-233.5,0.7,0.7,0,0,0,2.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(450));

	// little_logo
	this.instance_9 = new lib.Symbol7_1("synched",0);
	this.instance_9.setTransform(-115.4,-271.25,0.6,0.6,0,0,0,-0.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(450));

	// perehodiki
	this.instance_10 = new lib.Tween18("synched",0);
	this.instance_10.setTransform(2.55,4.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0},20).to({startPosition:0},339).wait(91));

	// legal2
	this.instance_11 = new lib.Symbol13("synched",0);
	this.instance_11.setTransform(-6.2,258.8,1,1,0,0,0,123.8,20.3);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},20).to({startPosition:0},266).to({alpha:0},15).wait(149));

	// gradient
	this.instance_12 = new lib.gradient("synched",0);
	this.instance_12.setTransform(192.95,-14.15,1.1433,0.4765,0,0,0,150,299.9);
	this.instance_12.alpha = 0.8086;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(450));

	// Layer_3
	this.instance_13 = new lib.pic("synched",0);
	this.instance_13.setTransform(394.1,331.8,1,1,0,0,0,708,850.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.9,-485.6,1840,1070.4);


// stage content:
(lib._300x250_lc_parallel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A6P13MA0fAAAMAAAArvMg0fAAAg");
	this.shape.setTransform(149.9993,124.9994,0.8929,0.8929);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.anim();
	this.instance.setTransform(133.9,267.85,0.8929,0.8929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(29.5,-40.7,559.5,408.59999999999997);
// library properties:
lib.properties = {
	id: '02D436A8E1B2244B92B0280E4E44BCD5',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Car.jpg?1792490332031", id:"Car"},
		{src:"images/Light.png?1792490332031", id:"Light"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['02D436A8E1B2244B92B0280E4E44BCD5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;