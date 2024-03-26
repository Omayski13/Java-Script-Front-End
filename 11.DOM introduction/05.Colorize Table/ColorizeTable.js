function colorize() {
    oddRows = document.querySelectorAll('table tr:nth-child(even)')
    for (const row of oddRows) {
        console.log(row)
        row.style.background = 'teal'
  
    }

}