/*
* "Why I'm bad at Javascript"
* -A thing where phil talks about that
*/

var dude = {
  "name"      :"Phil",
  "age"       :23,
  "experience":"not that much"
  };
var version = 0.01;






var someStuffIveWorkedOn = 
[
  {"name":"wid game",  "link":"http://dev.arisgames.org/scratch/widstowncenter/tempcontrol/tempcontrol.php"},
  {"name":"kkomomon",  "link":"http://dev.arisgames.org/scratch/kkomamon/minigame/fight.html"},
  {"name":"web bp",    "link":"http://arisgames.org/server/services/v1/samples/jsWebBackPack/index.html?gameId=5339"},
  {"name":"wid game",  "link":"http://arisgames.org/server/services/v1/samples/notebook/index.html?gameId=3847"},
  {"name":"mhs stuff", "link":"http://dev.arisgames.org/scratch/mhs/iron_mine_2013/index.php"},
  {"name":"gdm",       "link":"http://phildogames.com/games/game-design-machine/"},
  {"name":"ogam/wdky", "link":"http://phildogames.com/games/ogam/what-doesnt-kill-you/"},
  {"name":"ogam/mbtf", "link":"http://phildogames.com/games/ogam/mbtf/"},
  {"name":"astar",     "link":"http://phildogames.com/misc/astar/index.html"},
  {"name":"zomb",      "link":"http://phildogames.com/games/ogam/zomb/"},
  {"name":"github",    "link":"https://github.com/Phildo"}
];











function talkAboutObjects()
{
  //alert("JAVASCRIPT IS NOT OBJECT ORIENTED");

  //Uses "JSON"
  var obj = { "key":"value", "nextkey":"nextvalue" };

  obj.anotherkey = 7;
  //alert(obj.anotherkey);

  obj["onemorekey"] = "onemorevalue "+obj.anotherkey;
  //alert(obj.onemoerkey);

  var hash = {};
  hash["banana"] = "pajamas";

  var arr = [];
  arr.push("banana");
  arr.push("pajamas");
  //alert(arr[0]+" "+arr[1]);
  arr["abraham"] = "lincoln";
  //alert(arr[0]+" "+arr[1]+" "+arr["abraham"]);
  arr.push("foo");
  //alert(arr[0]+" "+arr[1]+" "+arr["abraham"]+" "+arr[2]);

  //Say I want an array of puppies
  var puppies = [];

  puppies.push(
    {
      "name"  :"fluffs mcgillicuddy",
      "weight":212,
      "legs"  :4
    });
  puppies.push(
    {
      "naem"  :"abraham stinkin",
      "weight":"4 score and 20",//yes I know 'score' is a non general unit lay off me
      "legs"  :4
    });

  function createPuppy(name, weight)
  {
    return { "name":name, "weight":weight, "legs":4 };
  }

  puppies.push(createPuppy("bill",123));
  //console.log(puppies);

  function Puppy(name, weight)
  {
    this.name = name;
    this.weight = weight;
  }
  //puppies.push(Puppy("Goku",9001));
  //console.log(puppies);

  //puppies.push(new Puppy("foo","bar"));
  //console.log(puppies);

  var Puppy2 = function(name, weight)
  {
    this.name = name;
    this.weight = weight;
    this.dance = function()
    {
      this.name = "dancing "+this.name;
    }
  }

  var dancer = new Puppy2("man",0);
  dancer.dance();
  //puppies.push(dancer);
  //console.log(puppies);

  var Puppy3 = function(name)
  {
    this.name = name;
    this.capitalizeName = function()
    {
      this.name = this.name.toUpperCase();
    }
    this.lowercaseName = function()
    {
      //alert(this.name);
      this.name = this.name.toLowerCase();
    }
  }

  var dog = new Puppy3("dog");
  dog.capitalizeName();
  //puppies.push(dog);
  //console.log(puppies);

  setTimeout(dog.lowercaseName,                    1000);
  //setTimeout(function() { console.log(puppies); }, 2000);

  //console.log(window);

  var Puppy4 = function(name)
  {
    var self = this;

    self.name = name;
    self.capitalizeName = function()
    {
      self.name = self.name.toUpperCase();
    }
    self.lowercaseName = function()
    {
      self.name = self.name.toLowerCase();
    }
  }

  var cat = new Puppy4("cat");
  cat.capitalizeName();
  //puppies.push(cat);

  //setTimeout(cat.lowercaseName,                    1000);
  //setTimeout(function() { console.log(puppies); }, 2000);

  //PhilQuickTip(TM) - Object creation is SLOW!!!! See http://phildogames.com/misc/js-linked-list/benchmark.html
}








function talkAboutStructure()
{
  var struct = document.getElementById('structure');
  //console.log(struct);

  struct.banana = "test";
  //console.log(struct);
  //console.log(struct["banana"]);
  
  
  /*
  struct.innerHTML = 
    "<div id='structbox' "+
      "style='width:500px;height:500px;border:1px solid black;'>"+
    "</div>";
    */
  

  function o(a,b,c) { this.a = a; this.b = b; this.c = c; };
  var dataArr = [
    new o("michael","jackson",1),
    new o("lionel","richie",2),
    new o("stevie","wonder",3),
    new o("whitney","houston",4),
    new o("huey","lewis",5),
    new o("the","boss",6)
    ];

  function createWeAreTheWorldCell(artist)
  {
    var cell = 
      "<div id='"+artist.b+"' class='artist'>"+
        "#"+artist.c+" - "+artist.a+" "+artist.b+
      "</div>";
    return cell;
  }

  for(var i in dataArr)
  {
    //document.getElementById('structbox').innerHTML += 
      //createWeAreTheWorldCell(dataArr[i]);
  }

  function createWeAreTheWorldCellV2(artist)
  {
    var cell = document.createElement('div');
    cell.id = artist.b;
    cell.class = 'artist';
    cell.innerHTML = "#"+artist.c+" - "+artist.a+" "+artist.b;

    var img = document.createElement('img');
    //equivalent to...
    //var img = new Image();
    img.src = artist.mugshot;

    cell.appendChild(img);

    return cell;
  }

  /*
  for(var i in dataArr)
  {
    document.getElementById('structbox').appendChild( 
      createWeAreTheWorldCellV2(dataArr[i]));
  }
  */
}










function printStuffIveWorkedOn()
{
  return;
  var ssiwo = someStuffIveWorkedOn;
  for(var i in ssiwo)
  {
    document.getElementById('stuff').innerHTML += 
      "<a href='"+ssiwo[i].link+"'>"+ssiwo[i].name+"</a><br />\n";
  }
}
window.addEventListener('load', function() { printStuffIveWorkedOn(); });
//ps- plz don't actually run this code
