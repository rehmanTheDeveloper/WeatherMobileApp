import * as theme from './theme';

const constants = {
  apiKey: `518aa3a6aa8f4bf5b13131200250401`,
  defaultCity: 
    {
      "id": 2618724,
      "name": "New York",
      "region": "New York",
      "country": "United States of America",
      "lat": 40.71,
      "lon": -74.01,
      "url": "new-york-new-york-united-states-of-america"
    },
    theme: {
      "light": {
        text: theme.colors.blue[800],
        lead: theme.colors.dark[700],
        header: '#fff',
        gradientColor: [theme.colors.darkBlue[50], theme.colors.blue[100]],
        heading: theme.colors.blue[100],
        cardGradient: [theme.colors.blue[600], theme.colors.blue[950]],
        cardText: theme.colors.blue[600],
        buttonBackground: theme.colors.darkBlue[600],
        buttonText: theme.colors.blue[50],
        inactivePagination: theme.colors.dark[300],
        activePagination: theme.colors.blue[400],
        viewBackground: '#fff',
        borderColor: theme.colors.blue[800]
      },
      "dark": {
        text: theme.colors.dark[50],
        lead: theme.colors.dark[300],
        header: theme.colors.blue[950],
        gradientColor: [theme.colors.blue[950], theme.colors.darkBlue[950]],
        heading: theme.colors.blue[50],
        cardGradient: [theme.colors.dark[700], theme.colors.blue[950]],
        cardText: theme.colors.blue[600],
        buttonBackground: theme.colors.blue[100],
        buttonText: theme.colors.blue[800],
        inactivePagination: theme.colors.dark[300],
        activePagination: theme.colors.blue[500],
        viewBackground: theme.colors.blue[950],
        borderColor: theme.colors.blue[400]
      },
    }
};

export {theme, constants};
