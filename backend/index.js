import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import multer from 'multer';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

mongoose.connect('mongodb://localhost:27017/Cluster99', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const signinschema = new mongoose.Schema({
  name: String,
  password: String,
});


const homeschema = new mongoose.Schema({
  type: String,
  imgurl: String,
  price: Number,
  name:String,
  sellby:String,
});


const selldetailschema=new mongoose.Schema(
  {
    name:String,
    name1:String,
    name2:String,
    name3:String,
    selectedOption:String,
    
  }
);


const selldetailschema2 = new mongoose.Schema({
  name: String,
  name1: String,
  name2: String,
  name3: String,
  name4: String,
  selectedOption: String,
  selectedOption1: String,
  sizes: [String],
  // image: {
  //   data: Buffer,
  //   contentType: String,
  // },
});
const Selldetails=mongoose.model('Selldetails',selldetailschema,'selldetails');

const Homeitem = mongoose.model('Homeitem', homeschema, 'ecohome');


const Selldetails2=mongoose.model('Selldetails2',selldetailschema2,'selldetails2');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });


const data = [
  { name: 'Shirts', path: '/shirts' },
  { name: 'Pants', path: '/pants' },
  { name: 'T-Shirts', path: '/tshirts' },
  { name: 'Night-Tracks', path: '/nighttrack' },
  { name: 'Women-Wear', path: '/women' },
  { name: 'Watches', path: '/watches' },
  { name: 'Accessories', path: '/accessories' },
];

app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = data.filter(item => item.name.toLowerCase().includes(query));
  res.json(results);
});

const Signitem = mongoose.model('Signitem', signinschema, 'ecosign');

// Route for handling search requests
app.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query;
    const results = await Signitem.find({ name: new RegExp(query, 'i') });
    res.json(results);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/items', async (req, res) => {
  try {
    const { name, password } = req.body;
    const existingItem = await Signitem.findOne({ name });
    if (existingItem) {
      res.status(200).json({ message: 'User found', item: existingItem });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/items1', async (req, res) => {
  try {
    const { name } = req.body;
    const newItem = new Signitem({ name });
    await newItem.save();
    res.send("Data saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("An error occurred while saving data.");
  }
});

app.post('/api/items2', async (req, res) => {
  try {
    const data = await Homeitem.find({});
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post('/api/items3', async (req, res) => {
  try {
    const { type, imgurl, price, sellby, name } = req.body;
    const newSales = new Homeitem({ type, imgurl, price, sellby, name });
    await newSales.save();
    res.send("Data saved successfully!");
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.post('/api/items4', async (req, res) => {
  try {
    const { name, name1, name2, name3 ,selectedOption} = req.body;
    const newItemsales = new Selldetails({ name, name1, name2, name3,selectedOption });
    await newItemsales.save();
    res.status(201).send("Data saved successfully"); // Send a response back to the client
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Internal Server Error");
  }
});



app.post('/api/items5',async(req,res)=>{
  try{
    const {name,name1}=req.body;
    const newItemfind=await Selldetails.findOne({name,name1});
    if(newItemfind){
      res.status(200).json({ message: 'User found', item: newItemfind });
    }
    else{
      res.status(500).send("User Not Found");
    }
  }catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});




app.post('/api/items6', upload.single('image'), async (req, res) => {
  try {
    const { name, name1, name2, name3, name4, selectedOption, selectedOption1, sizes } = req.body;

    // const image = {
    //   data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
    //   contentType: req.file.mimetype,
    // };

    const newItem = new Selldetails2({
      name,
      name1,
      name2,
      name3,
      name4,
      selectedOption,
      selectedOption1,
      sizes,
      
    });

    await newItem.save();
    res.status(201).send("Data saved successfully with image!");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Internal Server Error");
  }
});



app.post('/api/items7', async (req, res) => {
  const { selectedOption } = req.body; // Get the category from the request body
  try {
    const data2 = await Selldetails2.find({ selectedOption: selectedOption }); // Filter by category
    res.json(data2);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
