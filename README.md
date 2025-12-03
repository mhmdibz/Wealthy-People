# 💰 Wealthy People - Interactive Wealth Manager

A dynamic web application for managing and visualizing wealthy individuals' data with real-time filtering, sorting, and data manipulation features.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.1-7952B3?style=flat&logo=bootstrap&logoColor=white)

## 🌟 Features

- **🎲 Random User Generation** - Fetch random wealthy individuals from Random User API
- **💵 Double Money** - Instantly double the wealth of all persons
- **👑 Millionaires Filter** - Display only millionaires (wealth ≥ $1,000,000)
- **📊 Sort by Wealth** - Arrange people from richest to poorest
- **🔄 Original Data View** - Reset to show the unfiltered list
- **💱 USD Formatting** - Professional currency display format
- **📱 Responsive Design** - Works seamlessly on all devices

## 🎯 Demo

The application allows you to:
1. Add random wealthy people to your list
2. Manipulate their wealth dynamically
3. Filter and sort based on various criteria
4. View formatted wealth in USD currency

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls and Bootstrap CDN)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/wealthy-people.git
cd wealthy-people
```

2. **Open the application**
```bash
# Simply open index.html in your browser
# OR use a local server
python -m http.server 8000
# Then visit: http://localhost:8000
```

That's it! No build process or dependencies to install.

## 📖 How to Use

### Controls

| Button | Function |
|--------|----------|
| **Add User** | Fetches a random person with random wealth from the API |
| **Double Money** | Multiplies everyone's wealth by 2 |
| **Show Only Millionaires** | Filters to show only people with $1M+ |
| **Sort By Richest** | Orders the list from highest to lowest wealth |
| **Show Original** | Restores the original unfiltered list |

### Example Workflow

1. Click **"Add User"** multiple times to populate your list
2. Click **"Sort By Richest"** to see who's at the top
3. Click **"Show Only Millionaires"** to filter the wealthy elite
4. Click **"Double Money"** to see wealth grow (note: this shows doubled values but doesn't modify original data)
5. Click **"Show Original"** to return to your base dataset

## 🏗️ Project Structure

```
wealthy-people/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # Application logic and API integration
└── README.md           # Project documentation
```

## 🔧 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with Flexbox layout
- **JavaScript (ES6+)** - Async/await, Array methods (map, filter, sort)
- **Bootstrap 5.2.1** - CSS framework (CDN)
- **Random User API** - External API for generating random user data

## 💻 Code Highlights

### API Integration
```javascript
const getRandomUser = async () => {
  let res = await (await fetch("https://randomuser.me/api")).json();
  // Process and add person to list
};
```

### Array Manipulation
- **Map**: Double wealth values
- **Filter**: Show only millionaires
- **Sort**: Order by wealth descending

### Currency Formatting
```javascript
let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
```

## 🎨 UI/UX Features

- Clean, minimalist interface
- Clear visual separation between controls and data
- Hover effects on buttons for better interactivity
- Responsive layout that adapts to different screen sizes
- Professional currency formatting

## 📝 API Reference

**Random User API**
- Endpoint: `https://randomuser.me/api`
- Returns: Random user data including name and other details
- Wealth is randomly generated (0 - $10,000,000)

## 🔮 Future Enhancements

- [ ] Add user search functionality
- [ ] Export data to CSV/JSON
- [ ] Charts and graphs for wealth distribution
- [ ] Edit individual person's wealth
- [ ] Delete specific persons
- [ ] Save data to local storage
- [ ] Dark mode toggle
- [ ] Pagination for large datasets

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

 

## 🙏 Acknowledgments

- [Random User API](https://randomuser.me/) - For providing free random user data
- [Bootstrap](https://getbootstrap.com/) - For the CSS framework
- Inspired by the need to practice JavaScript array methods
 

---

⭐ **If you find this project useful, please consider giving it a star!** ⭐
