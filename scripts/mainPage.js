// Variables
const boy_names = ["Adam", "Alex", "Aaron", "Austin", "Andrew", "Anthony", "Adrian", "Arthur", "Aiden", "Alan", "Albert", "Antonio", "Axel", "Amir", "Armando", "Asher", "Angelo", "Ali", "August", "Atlas","Benjamin", "Brandon", "Bryan", "Bryce", "Blake", "Brody", "Brady", "Bradley", "Brendan", "Brock", "Bentley", "Brett", "Beckett", "Bruce", "Barrett", "Byron", "Benson", "Bodhi", "Bo", "Blaine","Christopher", "Cameron", "Carter", "Connor", "Caleb", "Christian", "Cole", "Colton", "Cody", "Chase", "Cameron", "Cooper", "Cyrus", "Cohen", "Calvin", "Cash", "Cruz", "Clayton", "Carl", "Case","Daniel", "David", "Dylan", "Dominic", "Derek", "Dean", "Dawson", "Damian", "Dante", "Dennis", "Drew", "Dustin", "Dalton", "Daxton", "Darren", "Donald", "Desmond", "Darius", "Dexter", "Duke","Ethan", "Elijah", "Evan", "Elliott", "Ezekiel", "Edward", "Emmett", "Ezra", "Erick", "Enzo", "Emanuel", "Elian", "Eugene", "Eddie", "Edwin", "Ewan", "Elio", "Eliot", "Elvin", "Elisha", "Finn", "Felix", "Frank", "Fernando", "Frederick", "Fabian", "Fletcher", "Finnegan", "Fox", "Fisher", "Foster", "Flynn", "Ford", "Franco", "Floyd", "Franz", "Forest", "Finley", "Fernand", "Faris","Gabriel", "Grayson", "Gavin", "George", "Graham", "Grant", "Gideon", "Griffin", "Gage", "Giovanni", "Gunner", "Garrett", "Gregory", "Gianni", "Gustavo", "Gael", "Glen", "Gerald", "Giancarlo", "Grey","Henry", "Hunter", "Hudson", "Harrison", "Hector", "Hayden", "Hugo", "Holden", "Harvey", "Hank", "Harris", "Heath", "Hendrix", "Harley", "Huxley", "Hamza", "Hakeem", "Hassan", "Harris", "Harlan","Isaac", "Isaiah", "Ian", "Ivan", "Ibrahim", "Israel", "Iker", "Izaiah", "Ira", "Ishaan", "Irving", "Ismael", "Ishmael", "Ignacio", "Izayah", "Imran", "Immanuel", "Irvin", "Iain", "Izak","Jacob", "Jackson", "James", "John", "Joseph", "Joshua", "Jonathan", "Jack", "Jaxon", "Jordan", "Jayden", "Josiah", "Jace", "Jason", "Julian", "Jude", "Jeffrey", "Jett", "Joaquin", "Jonah","Kevin", "Kyle", "Kaleb", "Kaden", "Kayden", "Kai", "Kingston", "Knox", "Kameron", "Killian", "Kaius", "Kian", "Kasen", "Kieran", "Karson", "Kody", "Kairo", "Kendrick", "Keegan", "Karter","Liam", "Logan", "Lucas", "Luke", "Levi", "Lincoln", "Landon", "Luka", "Leonardo", "Leo", "Louis", "Lorenzo", "Lance", "Luca", "Lawson", "Landen", "Leon", "Lamar", "Lyle", "Landry","Michael", "Matthew", "Mason", "Miles", "Maverick", "Max", "Mateo", "Marcus", "Miguel", "Maxwell", "Malachi", "Milo", "Mohammed", "Marshall", "Moses", "Maurice", "Moises", "Marvin", "Mekhi", "Maximus","Noah", "Nathan", "Nicholas", "Nolan", "Nathaniel", "Nico", "Neil", "Nash", "Nelson", "Nixon", "Nikolas", "Nathanael", "Nikolai", "Noel", "Nickolas", "Niklaus", "Nigel", "Nehemiah", "Nico", "Noble","Oliver", "Owen", "Oscar", "Omar", "Orion", "Otto", "Omarion", "Omari", "Oakley", "Orlando", "Osvaldo", "Octavio", "Olivier", "Otis", "Odin", "Ozzie", "Oren", "Osman", "Oskar", "Oswald","Patrick", "Parker", "Peyton", "Peter", "Preston", "Paul", "Phoenix", "Prince", "Pierce", "Pablo", "Pedro", "Phillip", "Porter", "Princeton", "Philip", "Perry", "Payton", "Paxton", "Pierce", "Presley","Quentin", "Quincy", "Quinton", "Quinn", "Quintin", "Quinten", "Quintrell", "Quindarius", "Quintavious", "Quantavious", "Quintyn", "Quamaine", "Quaron", "Quaid", "Quran", "Quintrell", "Quintrell", "Quinterius", "Quintavius", "Quamir", "Quay","Ryan", "Robert", "Richard", "Riley", "Ryder", "Roman", "Rowan", "Reid", "Rylan", "Ricardo", "Ronan", "Rhys", "Rafael", "Rocco", "Reuben", "Raymond", "Rory", "Romeo", "Rohan", "Rodrigo","Samuel", "Sebastian", "Steven", "Simon", "Silas", "Seth", "Sawyer", "Shane", "Stephen", "Spencer", "Stefan", "Santiago", "Scott", "Sergio", "Sullivan", "Stanley", "Sterling", "Santino", "Salvatore", "Stewart","Thomas", "Tyler", "Tristan", "Theodore", "Tanner", "Timothy", "Trevor", "Troy", "Tate", "Tobias", "Tucker", "Terry", "Trenton", "Taylor", "Talon", "Tobin", "Tomas", "Trey", "Tony", "Truett","Uriel", "Ulysses", "Umar", "Ulises", "Ulrich", "Urban", "Upton", "Uriah", "Usman", "Uziel", "Ulric", "Uzziah", "Ugo", "Usher", "Umar", "Ulysses", "Uri", "Ubaldo", "Umberto", "Upton","Vincent", "Victor", "Valentino", "Vincenzo", "Vaughn", "Vance", "Vernon", "Vladimir", "Vaughan", "Vernell", "Vito", "Virgil", "Vidal", "Vander", "Valentine", "Vicente", "Vishal", "Viktor", "Vikram", "Vonn","William", "Wyatt", "Wesley", "Walter", "Waylon", "Wade", "Weston", "Walker", "Wilson", "Warren", "Winston", "Wade", "Wiley", "Wayne", "Walter", "Wesson", "Weldon", "Winton", "Wilfred", "Wilbur","Xavier", "Xander", "Xzavier", "Xavi", "Xzander", "Xavion", "Xander", "Xavian", "Xiomar", "Xavien", "Xavious", "Xyler", "Xzavion", "Xian", "Xian", "Xzavion", "Xavien", "Xzavior", "Xavien", "Xyon","Yusuf", "Yousef", "Yahir", "Yael", "Yadiel", "Yahya", "Yael", "Yahya", "Yadiel", "Yahir", "Yasir", "Yousef", "Yosef", "Yandel", "Yasin", "Yosef", "Yonatan", "Yitzhak", "Yasser", "Yuri","Zachary", "Zion", "Zane", "Zander", "Zayden", "Zaiden", "Zayn", "Zayne", "Zachariah", "Zeke", "Zahir", "Zavier", "Zackary", "Zahir", "Zev", "Zyaire", "Zakai", "Zabdiel", "Zavian", "Zaden"] 

const girl_names = ["Ava", "Amelia", "Abigail", "Avery", "Aria", "Anna", "Addison", "Audrey", "Ariana", "Alice", "Allison", "Alexa", "Aubrey", "Autumn", "Adeline", "Amaya", "Alyssa", "Ashley", "Arianna", "Aaliyah","Bella", "Brooklyn", "Bailey", "Brianna", "Brielle", "Brooke", "Bethany", "Beatrice", "Bianca", "Bridget", "Brittany", "Blake", "Brynlee", "Bailee", "Blakely", "Brynn", "Brinley", "Bethany", "Brynlee", "Brielle","Charlotte", "Chloe", "Cora", "Camila", "Clara", "Caroline", "Claire", "Cecilia", "Callie", "Catalina", "Cadence", "Cassandra", "Crystal", "Cynthia", "Clementine", "Celeste", "Celine", "Celia", "Cheyenne", "Caroline","Daisy", "Delilah", "Destiny", "Danielle", "Diana", "Dakota", "Dahlia", "Demi", "Daphne", "Daniella", "Danica", "Delaney", "Diana", "Delia", "Daleyza", "Dylan", "Daisy", "Demi", "Dahlia", "Danica","Emma", "Emily", "Ella", "Elizabeth", "Eleanor", "Eva", "Evelyn", "Emery", "Elise", "Elena", "Eliza", "Esther", "Eliana", "Esmeralda", "Evangeline", "Emerson", "Ellie", "Eloise", "Everly", "Elaina","Faith", "Fiona", "Florence", "Francesca", "Freya", "Felicity", "Fatima", "Fernanda", "Faye", "Fern", "Farrah", "Finley", "Frida", "Fernandez", "Frances", "Flora", "Fernanda", "Farah", "Faith", "Felicity","Grace", "Gabriella", "Gianna", "Genesis", "Genevieve", "Gemma", "Guadalupe", "Giselle", "Gabrielle", "Gloria", "Georgia", "Gracie", "Gwendolyn", "Gabriela", "Greta", "Gia", "Giovanna", "Gabby", "Gracelyn", "Gwen","Hannah", "Harper", "Hazel", "Hailey", "Holly", "Hope", "Heaven", "Hayden", "Haven", "Haley", "Halle", "Hadley", "Harmony", "Hana", "Harriet", "Hattie", "Heidi", "Henrietta", "Hermione", "Hunter","Isabella", "Ivy", "Isabel", "Isla", "Iris", "Irene", "Izabella", "Ivory", "Isabela", "Imogen", "Indigo", "Ingrid", "India", "Ivanna", "Ida", "Ines", "Isis", "Irina", "Isabella", "Ivy","Jasmine", "Julia", "Jade", "Jessica", "Jocelyn", "Jenna", "Josephine", "Journey", "Jillian", "Joy", "Juliana", "Josie", "Jane", "Jolie", "Jazmin", "Jasmin", "Jamie", "Jennifer", "Janelle", "Joanna","Kayla", "Kylie", "Kennedy", "Katherine", "Kaitlyn", "Kelly", "Karina", "Kelsey", "Kendra", "Kimberly", "Kira", "Kamila", "Kali", "Kiara", "Kendra", "Kamryn", "Katelyn", "Kayleigh", "Kassandra", "Kristen","Lily", "Layla", "Luna", "Leah", "Lillian", "Lucy", "Lydia", "Lila", "Lauren", "London", "Liliana", "Lola", "Lena", "Leilani", "Lilliana", "Lana", "Lindsey", "Laura", "Lena", "Lyric","Mia", "Madison", "Mila", "Maya", "Mackenzie", "Madelyn", "Melanie", "Molly", "Maria", "Michelle", "Marley", "Margaret", "Megan", "Morgan", "Mckenna", "Maggie", "Makayla", "Mariana", "Miranda", "Marian","Natalie", "Nora", "Naomi", "Nova", "Nevaeh", "Nina", "Nicole", "Norah", "Nadia", "Nyla", "Noelle", "Nylah", "Nia", "Natalia", "Nancy", "Nola", "Noa", "Natasha", "Naomi", "Nora","Olivia", "Octavia", "Ophelia", "Opal", "Omarion", "Olive", "Odin", "Oona", "Otto", "Oriana", "Oswald", "Orion", "Olympia", "Ozzy", "Oksana", "Oceane", "Odelia", "Odette", "Olesia", "Olympia","Penelope", "Paige", "Piper", "Paisley", "Peyton", "Payton", "Paris", "Phoebe", "Parker", "Presley", "Penny", "Priscilla", "Perla", "Paula", "Pearl", "Princess", "Pamela", "Patricia", "Paulina", "Paisley","Quinn", "Queen", "Quincy", "Quenby", "Quintessa", "Quorra", "Quinna", "Quilla", "Quiana", "Quintasia", "Quintara", "Quintessa", "Quinna", "Quintara", "Quilla", "Quintessa", "Quiana", "Quintasia", "Quintara", "Quintessa","Riley", "Ruby", "Rose", "Rebecca", "Rachel", "Reagan", "Raquel", "Rylee", "Reese", "Rosalie", "Ruth", "Reina", "Remi", "River", "Rosa", "Regina", "Rhiannon", "Remy", "Raina", "Rowan","Sophia", "Scarlett", "Savannah", "Stella", "Samantha", "Serenity", "Skylar", "Sarah", "Sadie", "Sophie", "Sienna", "Sara", "Sage", "Summer", "Sylvia", "Selena", "Sabrina", "Serena", "Sloane", "Sasha","Taylor", "Tessa", "Trinity", "Teagan", "Talia", "Tatum", "Thea", "Tiffany", "Tara", "Tiana", "Teresa", "Tatiana", "Taliah", "Taliyah", "Tabitha", "Tinsley", "Taya", "Tracy", "Thalia", "Tara","Unity", "Uma", "Ursula", "Uriah", "Una", "Urszula", "Ulrika", "Ulla", "Urbana", "Uzma", "Ume", "Uri", "Ulani", "Ulli", "Ursa", "Ulrike", "Umi", "Umbria", "Uzuri", "Una","Victoria", "Violet", "Valentina", "Valeria", "Vivian", "Valerie", "Vanessa", "Veronica", "Vera", "Vivienne", "Vienna", "Valery", "Vada", "Veda", "Viola", "Valencia", "Vida", "Vina", "Vanna", "Velma","Willow", "Willa", "Winter", "Winnie", "Whitney", "Wynter", "Waverly", "Wren", "Wendy", "Winifred", "Wanda", "Wynne", "Wynona", "Wednesday", "Wilhelmina", "Wendolyn", "Windy", "Wendell", "Wilma", "Wilhelmina","Ximena", "Xiomara", "Xena", "Xandra", "Xia", "Xyla", "Xochitl", "Xavia", "Xandria", "Xitlali", "Xitlaly", "Xenia", "Xylia", "Xanthe", "Xylona", "Xylona", "Xylona", "Xylona", "Xylona", "Xylona","Yara", "Yaretzi", "Yasmin", "Yareli", "Yamileth", "Yuliana", "Yamilet", "Yarely", "Yvette", "Yvonne", "Yasmine", "Yulissa", "Yessenia", "Yaritza", "Yesenia", "Yazmin", "Yusra", "Yaritza", "Yulissa", "Yessenia","Zoe", "Zara", "Zahra", "Zariah", "Zuri", "Zaria", "Zaynab", "Zoie", "Zainab", "Zaniyah", "Zoey", "Zion", "Zara", "Zahara", "Zendaya", "Zoya", "Zaniyah", "Zoey", "Zara", "Zahara"] 
const generate_button = document.getElementById("generateName")
var gender_selection = document.getElementById("gender").value



// First Letter Preference functions (26 functions) for male
function male_names(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    if (firstLetterSelection === "noPreference"){
        let random_number = Math.floor(Math.random()*boy_names.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = boy_names[random_number]
    }
    else if(firstLetterSelection === "a"){
        letter_a()
    }
    else if (firstLetterSelection === "b"){
        letter_b()
    }
    else if (firstLetterSelection === "c"){
        letter_c()
    }
    else if (firstLetterSelection === "d"){
        letter_d()
    }
    else if (firstLetterSelection === "e"){
        letter_e()
    }
    else if (firstLetterSelection === "f"){
        letter_f()
    }
    else if (firstLetterSelection === "g"){
        letter_g()
    }
    else if (firstLetterSelection === "h"){
        letter_h()
    }
    else if (firstLetterSelection === "i"){
        letter_i()
    }
    else if (firstLetterSelection === "j"){
        letter_j()
    }
    else if (firstLetterSelection === "k"){
        letter_k()
    }
    else if (firstLetterSelection === "l"){
        letter_l()
    }
    else if (firstLetterSelection === "m"){
        letter_m()
    }
    else if (firstLetterSelection === "n"){
        letter_n()
    }
    else if (firstLetterSelection === "o"){
        letter_o()
    }
    else if (firstLetterSelection === "p"){
        letter_p()
    }
    else if (firstLetterSelection === "q"){
        letter_q()
    }
    else if (firstLetterSelection === "r"){
        letter_r()
    }
    else if (firstLetterSelection === "s"){
        letter_s()
    }
    else if (firstLetterSelection === "t"){
        letter_t()
    }
    else if (firstLetterSelection === "u"){
        letter_u()
    }
    else if (firstLetterSelection === "v"){
        letter_v()
    }
    else if (firstLetterSelection === "w"){
        letter_w()
    }
    else if (firstLetterSelection === "x"){
        letter_x()
    }
    else if (firstLetterSelection === "y"){
        letter_y()
    }
    else if (firstLetterSelection === "z"){
        letter_z()
    }

    
    }
function letter_a(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "a"){
        const a_words = boy_names.filter(word => word.startsWith("A"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_b(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "b"){
        const a_words = boy_names.filter(word => word.startsWith("B"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_c(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "c"){
        const a_words = boy_names.filter(word => word.startsWith("C"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_d(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "d"){
        const a_words = boy_names.filter(word => word.startsWith("D"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_e(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "e"){
        const a_words = boy_names.filter(word => word.startsWith("E"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_f(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "f"){
        const a_words = boy_names.filter(word => word.startsWith("F"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_g(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "g"){
        const a_words = boy_names.filter(word => word.startsWith("G"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}


function letter_h(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "h"){
        const a_words = boy_names.filter(word => word.startsWith("H"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_i(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "i"){
        const a_words = boy_names.filter(word => word.startsWith("I"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_j(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "j"){
        const a_words = boy_names.filter(word => word.startsWith("J"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_k(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "k"){
        const a_words = boy_names.filter(word => word.startsWith("K"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_l(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "l"){
        const a_words = boy_names.filter(word => word.startsWith("L"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_m(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "m"){
        const a_words = boy_names.filter(word => word.startsWith("M"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_n(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "n"){
        const a_words = boy_names.filter(word => word.startsWith("N"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_o(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "o"){
        const a_words = boy_names.filter(word => word.startsWith("O"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_p(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "p"){
        const a_words = boy_names.filter(word => word.startsWith("P"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_q(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "q"){
        const a_words = boy_names.filter(word => word.startsWith("Q"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_r(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "r"){
        const a_words = boy_names.filter(word => word.startsWith("R"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_s(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "s"){
        const a_words = boy_names.filter(word => word.startsWith("S"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_t(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "t"){
        const a_words = boy_names.filter(word => word.startsWith("T"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_u(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "u"){
        const a_words = boy_names.filter(word => word.startsWith("U"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_v(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "v"){
        const a_words = boy_names.filter(word => word.startsWith("V"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_w(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "w"){
        const a_words = boy_names.filter(word => word.startsWith("W"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_x(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "x"){
        const a_words = boy_names.filter(word => word.startsWith("X"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_y(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "y"){
        const a_words = boy_names.filter(word => word.startsWith("Y"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_z(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "z"){
        const a_words = boy_names.filter(word => word.startsWith("Z"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}


// Female name functions
function female_names(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    if (firstLetterSelection === "noPreference"){
        let random_number = Math.floor(Math.random()*girl_names.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = girl_names[random_number]
    }
    else if(firstLetterSelection === "a"){
        letter_a_female()
    }
    else if (firstLetterSelection === "b"){
        letter_b_female()
    }
    else if (firstLetterSelection === "c"){
        letter_c_female()
    }
    else if (firstLetterSelection === "d"){
        letter_d_female()
    }
    else if (firstLetterSelection === "e"){
        letter_e_female()
    }
    else if (firstLetterSelection === "f"){
        letter_f_female()
    }
    else if (firstLetterSelection === "g"){
        letter_g_female()
    }
    else if (firstLetterSelection === "h"){
        letter_h_female()
    }
    else if (firstLetterSelection === "i"){
        letter_i_female()
    }
    else if (firstLetterSelection === "j"){
        letter_j_female()
    }
    else if (firstLetterSelection === "k"){
        letter_k_female()
    }
    else if (firstLetterSelection === "l"){
        letter_l_female()
    }
    else if (firstLetterSelection === "m"){
        letter_m_female()
    }
    else if (firstLetterSelection === "n"){
        letter_n_female()
    }
    else if (firstLetterSelection === "o"){
        letter_o_female()
    }
    else if (firstLetterSelection === "p"){
        letter_p_female()
    }
    else if (firstLetterSelection === "q"){
        letter_q_female()
    }
    else if (firstLetterSelection === "r"){
        letter_r_female()
    }
    else if (firstLetterSelection === "s"){
        letter_s_female()
    }
    else if (firstLetterSelection === "t"){
        letter_t_female()
    }
    else if (firstLetterSelection === "u"){
        letter_u_female()
    }
    else if (firstLetterSelection === "v"){
        letter_v_female()
    }
    else if (firstLetterSelection === "w"){
        letter_w_female()
    }
    else if (firstLetterSelection === "x"){
        letter_x_female()
    }
    else if (firstLetterSelection === "y"){
        letter_y_female()
    }
    else if (firstLetterSelection === "z"){
        letter_z_female()
    }

    
    }
function letter_a_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "a"){
        const a_words = girl_names.filter(word => word.startsWith("A"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_b_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "b"){
        const a_words = girl_names.filter(word => word.startsWith("B"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_c_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "c"){
        const a_words = girl_names.filter(word => word.startsWith("C"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_d_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "d"){
        const a_words = girl_names.filter(word => word.startsWith("D"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_e_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "e"){
        const a_words = girl_names.filter(word => word.startsWith("E"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_f_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "f"){
        const a_words = girl_names.filter(word => word.startsWith("F"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_g_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "g"){
        const a_words = girl_names.filter(word => word.startsWith("G"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}


function letter_h_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "h"){
        const a_words = girl_names.filter(word => word.startsWith("H"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_i_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "i"){
        const a_words = girl_names.filter(word => word.startsWith("I"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_j_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "j"){
        const a_words = girl_names.filter(word => word.startsWith("J"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_k_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "k"){
        const a_words = girl_names.filter(word => word.startsWith("K"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_l_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "l"){
        const a_words = girl_names.filter(word => word.startsWith("L"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_m_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "m"){
        const a_words = girl_names.filter(word => word.startsWith("M"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_n_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "n"){
        const a_words = girl_names.filter(word => word.startsWith("N"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_o_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "o"){
        const a_words = girl_names.filter(word => word.startsWith("O"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_p_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "p"){
        const a_words = girl_names.filter(word => word.startsWith("P"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_q_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "q"){
        const a_words = girl_names.filter(word => word.startsWith("Q"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_r_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "r"){
        const a_words = girl_names.filter(word => word.startsWith("R"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_s_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "s"){
        const a_words = girl_names.filter(word => word.startsWith("S"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_t_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "t"){
        const a_words = girl_names.filter(word => word.startsWith("T"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_u_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "u"){
        const a_words = girl_names.filter(word => word.startsWith("U"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_v_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "v"){
        const a_words = girl_names.filter(word => word.startsWith("V"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_w_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "w"){
        const a_words = girl_names.filter(word => word.startsWith("W"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_x_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "x"){
        const a_words = girl_names.filter(word => word.startsWith("X"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_y_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "y"){
        const a_words = girl_names.filter(word => word.startsWith("Y"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

function letter_z_female(){
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log("First letter selection " + firstLetterSelection) // prints out  - delete later
    if (firstLetterSelection === "z"){
        const a_words = girl_names.filter(word => word.startsWith("Z"))
        let random_number = Math.floor(Math.random()*a_words.length)
        const displayText = document.getElementById("displayName")
        displayText.innerHTML = a_words[random_number]
    }
}

// Main name generator function
function generateName(){
    let gender_selection = document.getElementById("gender").value
    if (gender_selection === "male"){
        male_names()
    }else{
        female_names()
    }
}

generate_button.addEventListener("click",generateName)