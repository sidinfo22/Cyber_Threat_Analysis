// Wait for the DOM to load before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("designButton");
  
    // Add a click event listener to the button
    button.addEventListener("click", function () {
      window.location.href = "design.html";
    });
  });

// Vulnerability Assessment Bar Chart
const vulnAssessmentCtx124 = document.getElementById('vulnAssessmentChart124').getContext('2d');
const vulnAssessmentChart124 = new Chart(vulnAssessmentCtx124, {
    type: 'bar',
    data: {
        labels: ['EMR Servers', 'Billing Systems', 'Admin Workstations', 'Proxy Servers'],
        datasets: [{
            label: '# of Vulnerabilities',
            data: [12, 8, 15, 5],
            backgroundColor: [
                'rgba(213, 26, 26, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: [
                'rgba(213, 26, 26, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Severity Heatmap
const severityHeatmapCtx839 = document.getElementById('severityHeatmap839').getContext('2d');
const severityHeatmap839 = new Chart(severityHeatmapCtx839, {
    type: 'matrix', // Requires a matrix chart plugin
    data: {
        datasets: [{
            label: 'Severity Matrix',
            data: [
                {x: 'Low', y: 'Low', v: 2},
                {x: 'Low', y: 'Medium', v: 3},
                {x: 'Low', y: 'High', v: 5},
                {x: 'Medium', y: 'Low', v: 3},
                {x: 'Medium', y: 'Medium', v: 6},
                {x: 'Medium', y: 'High', v: 9},
                {x: 'High', y: 'Low', v: 5},
                {x: 'High', y: 'Medium', v: 9},
                {x: 'High', y: 'High', v: 15},
            ],
            backgroundColor: function(context) {
                const value = context.dataset.data[context.dataIndex].v;
                return value > 10 ? 'rgba(213, 26, 26, 0.6)' :
                       value > 5 ? 'rgba(255, 206, 86, 0.6)' :
                                   'rgba(75, 192, 192, 0.6)';
            },
            borderColor: '#fff',
            borderWidth: 1,
            width: function(context) {
                const a = context.chart.chartArea;
                return (a.right - a.left) / 5;
            },
            height: function(context) {
                const a = context.chart.chartArea;
                return (a.bottom - a.top) / 5;
            }
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { 
                type: 'category',
                labels: ['Low', 'Medium', 'High'],
                grid: { display: false },
                title: { display: true, text: 'Likelihood' }
            },
            y: { 
                type: 'category',
                labels: ['Low', 'Medium', 'High'],
                grid: { display: false },
                title: { display: true, text: 'Impact' }
            }
        }
    }
});

// Vulnerability Distribution Pie Chart
const vulnDistributionCtx982 = document.getElementById('vulnDistributionChart982').getContext('2d');
const vulnDistributionChart982 = new Chart(vulnDistributionCtx982, {
    type: 'pie',
    data: {
        labels: ['EMR Servers', 'Billing Systems', 'Admin Workstations', 'Proxy Servers'],
        datasets: [{
            label: '# of Vulnerabilities',
            data: [12, 8, 15, 5],
            backgroundColor: [
                'rgba(213, 26, 26, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: [
                '#fff',
                '#fff',
                '#fff',
                '#fff'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});





  // Simulated Attack Chart (Section 6)
  const simulatedAttackCtx789 = document.getElementById('simulatedAttackChart789').getContext('2d');
  const simulatedAttackChart789 = new Chart(simulatedAttackCtx789, {
      type: 'bar',
      data: {
          labels: ['Metasploit Framework', 'Burp Suite Pro', 'SQL Injection Testing', 'Phishing Simulations'],
          datasets: [{
              label: 'Successful Exploits',
              data: [1, 1, 1, 1],
              backgroundColor: [
                  'rgba(213, 26, 26, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(75, 192, 192, 0.6)'
              ],
              borderColor: [
                  'rgba(213, 26, 26, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: { beginAtZero: true, title: { display: true, text: 'Number of Exploits' } },
              x: { title: { display: true, text: 'Exploitation Techniques' } }
          },
          plugins: {
              legend: { display: false },
              title: { display: true, text: 'Simulated Attack Outcomes' }
          }
      }
  });


   // Lateral Movement Chart (Section 7)
   const lateralMovementCtx321 = document.getElementById('lateralMovementChart321').getContext('2d');
   const lateralMovementChart321 = new Chart(lateralMovementCtx321, {
       type: 'pie',
       data: {
           labels: ['Network Mapping', 'Credential Harvesting', 'Exploit Chaining', 'Data Access'],
           datasets: [{
               data: [25, 25, 25, 25],
               backgroundColor: [
                   'rgba(213, 26, 26, 0.6)',
                   'rgba(54, 162, 235, 0.6)',
                   'rgba(255, 206, 86, 0.6)',
                   'rgba(75, 192, 192, 0.6)'
               ],
               borderColor: [
                   '#fff',
                   '#fff',
                   '#fff',
                   '#fff'
               ],
               borderWidth: 1
           }]
       },
       options: {
           responsive: true,
           plugins: {
               legend: { position: 'bottom' },
               title: { display: true, text: 'Lateral Movement Techniques Distribution' }
           }
       }
   });
 




  // Documentation Chart (Section 9)
  const documentationCtx321 = document.getElementById('documentationChart321').getContext('2d');
  const documentationChart321 = new Chart(documentationCtx321, {
      type: 'pie',
      data: {
          labels: ['Low', 'Medium', 'High', 'Critical'],
          datasets: [{
              label: 'Vulnerability Severity',
              data: [10, 20, 40, 30],
              backgroundColor: [
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(213, 26, 26, 0.6)'
              ],
              borderColor: [
                  '#fff',
                  '#fff',
                  '#fff',
                  '#fff'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: { position: 'bottom' },
              title: { display: true, text: 'Vulnerability Severity Distribution' }
          }
      }
  });

   // Threat Analysis Chart (Section 1)
   const threatAnalysisCtx567 = document.getElementById('threatAnalysisChart567').getContext('2d');
   const threatAnalysisChart567 = new Chart(threatAnalysisCtx567, {
       type: 'bar',
       data: {
           labels: ['Outdated Apache Server', 'Weak SSH Configurations', 'SQL Injection', 'Phishing Susceptibility'],
           datasets: [{
               label: 'Threat Severity',
               data: [4, 3, 5, 2],
               backgroundColor: [
                   'rgba(213, 26, 26, 0.6)',
                   'rgba(255, 206, 86, 0.6)',
                   'rgba(54, 162, 235, 0.6)',
                   'rgba(75, 192, 192, 0.6)'
               ],
               borderColor: [
                   'rgba(213, 26, 26, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(75, 192, 192, 1)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           responsive: true,
           scales: {
               y: { 
                 beginAtZero: true,
                 title: {
                   display: true,
                   text: 'Severity Level (1-5)'
                 }
               },
               x: {
                 title: {
                   display: true,
                   text: 'Identified Threats'
                 }
               }
           },
           plugins: {
               legend: { display: false },
               title: { display: true, text: 'Threat Severity Levels' }
           }
       }
   });
 
   // Risk Assessment Chart (Section 3)
   const riskAssessmentCtx321 = document.getElementById('riskAssessmentChart321').getContext('2d');
   const riskAssessmentChart321 = new Chart(riskAssessmentCtx321, {
       type: 'doughnut',
       data: {
           labels: ['High Risk', 'Medium Risk', 'Low Risk'],
           datasets: [{
               label: 'Risk Levels',
               data: [2, 1, 1],
               backgroundColor: [
                   'rgba(213, 26, 26, 0.6)',
                   'rgba(255, 206, 86, 0.6)',
                   'rgba(75, 192, 192, 0.6)'
               ],
               borderColor: [
                   '#fff',
                   '#fff',
                   '#fff'
               ],
               borderWidth: 1
           }]
       },
       options: {
           responsive: true,
           plugins: {
               legend: { position: 'bottom' },
               title: { display: true, text: 'Risk Level Distribution' }
           }
       }
   });
 
   // Pulse Assessment Chart (Section 4)
   const pulseAssessmentCtx654 = document.getElementById('pulseAssessmentChart654').getContext('2d');
   const pulseAssessmentChart654 = new Chart(pulseAssessmentCtx654, {
       type: 'radar',
       data: {
           labels: ['Vulnerability Remediation', 'Employee Awareness', 'Incident Detection', 'System Uptime'],
           datasets: [{
               label: 'Pulse Assessment Metrics',
               data: [80, 90, 70, 99.9],
               backgroundColor: 'rgba(75, 192, 192, 0.2)',
               borderColor: 'rgba(75, 192, 192, 1)',
               borderWidth: 1,
               pointBackgroundColor: 'rgba(75, 192, 192, 1)'
           }]
       },
       options: {
           responsive: true,
           scales: {
               r: {
                   angleLines: { display: true },
                   suggestedMin: 50,
                   suggestedMax: 100,
                   ticks: {
                       stepSize: 10
                   }
               }
           },
           plugins: {
               legend: { position: 'top' },
               title: { display: true, text: 'Pulse Assessment Metrics Overview' }
           }
       }
   });
 
   // Lateral Movement Chart (Section 7)
   const lateralMovementCtx321 = document.getElementById('lateralMovementChart321').getContext('2d');
   const lateralMovementChart321 = new Chart(lateralMovementCtx321, {
       type: 'pie',
       data: {
           labels: ['Network Mapping', 'Credential Harvesting', 'Exploit Chaining', 'Data Access'],
           datasets: [{
               data: [25, 25, 25, 25],
               backgroundColor: [
                   'rgba(213, 26, 26, 0.6)',
                   'rgba(54, 162, 235, 0.6)',
                   'rgba(255, 206, 86, 0.6)',
                   'rgba(75, 192, 192, 0.6)'
               ],
               borderColor: [
                   '#fff',
                   '#fff',
                   '#fff',
                   '#fff'
               ],
               borderWidth: 1
           }]
       },
       options: {
           responsive: true,
           plugins: {
               legend: { position: 'bottom' },
               title: { display: true, text: 'Lateral Movement Techniques Distribution' }
           }
       }
   });
 
   // Simulated Attack Chart (Section 6)
   const simulatedAttackCtx789 = document.getElementById('simulatedAttackChart789').getContext('2d');
   const simulatedAttackChart789 = new Chart(simulatedAttackCtx789, {
       type: 'bar',
       data: {
           labels: ['Metasploit Framework', 'Burp Suite Pro', 'SQL Injection Testing', 'Phishing Simulations'],
           datasets: [{
               label: 'Successful Exploits',
               data: [1, 1, 1, 1],
               backgroundColor: [
                   'rgba(213, 26, 26, 0.6)',
                   'rgba(255, 206, 86, 0.6)',
                   'rgba(54, 162, 235, 0.6)',
                   'rgba(75, 192, 192, 0.6)'
               ],
               borderColor: [
                   'rgba(213, 26, 26, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(75, 192, 192, 1)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           responsive: true,
           scales: {
               y: { beginAtZero: true, title: { display: true, text: 'Number of Exploits' } },
               x: { title: { display: true, text: 'Exploitation Techniques' } }
           },
           plugins: {
               legend: { display: false },
               title: { display: true, text: 'Simulated Attack Outcomes' }
           }
       }
   });
 
   // Documentation Chart (Section 9)
   const documentationCtx321 = document.getElementById('documentationChart321').getContext('2d');
   const documentationChart321 = new Chart(documentationCtx321, {
       type: 'pie',
       data: {
           labels: ['Low', 'Medium', 'High', 'Critical'],
           datasets: [{
               label: 'Vulnerability Severity',
               data: [10, 20, 40, 30],
               backgroundColor: [
                   'rgba(75, 192, 192, 0.6)',
                   'rgba(255, 206, 86, 0.6)',
                   'rgba(255, 159, 64, 0.6)',
                   'rgba(213, 26, 26, 0.6)'
               ],
               borderColor: [
                   '#fff',
                   '#fff',
                   '#fff',
                   '#fff'
               ],
               borderWidth: 1
           }]
       },
       options: {
           responsive: true,
           plugins: {
               legend: { position: 'bottom' },
               title: { display: true, text: 'Vulnerability Severity Distribution' }
           }
       }
   });



  // Backup & Redundancy Chart (Section 6)
  const backupRedundancyCtx606 = document.getElementById('backupRedundancyChart606').getContext('2d');
  const backupRedundancyChart606 = new Chart(backupRedundancyCtx606, {
      type: 'bar',
      data: {
          labels: ['Regular Data Backups', 'Redundant Servers', 'Network Redundancy', 'Automated Failover'],
          datasets: [{
              label: 'Implementation Level (%)',
              data: [90, 80, 75, 85],
              backgroundColor: [
                  'rgba(213, 26, 26, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(75, 192, 192, 0.6)'
              ],
              borderColor: [
                  'rgba(213, 26, 26, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: { 
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Implementation Level (%)'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Backup & Redundancy Strategies'
                }
              }
          },
          plugins: {
              legend: { display: false },
              title: { display: true, text: 'Backup & Redundancy Implementation Levels' }
          }
      }
  });

  // Data Protection & Storage Chart (Section 7)
  const dataProtectionCtx707 = document.getElementById('dataProtectionChart707').getContext('2d');
  const dataProtectionChart707 = new Chart(dataProtectionCtx707, {
      type: 'pie',
      data: {
          labels: ['Encryption', 'Access Controls', 'Data Classification', 'Secure Storage'],
          datasets: [{
              label: 'Data Protection Measures',
              data: [40, 30, 20, 10],
              backgroundColor: [
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(213, 26, 26, 0.6)'
              ],
              borderColor: [
                  '#fff',
                  '#fff',
                  '#fff',
                  '#fff'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: { position: 'bottom' },
              title: { display: true, text: 'Data Protection Measures Distribution' }
          }
      }
  });



  // Toggle Dropdown Menu
  function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('active');
  }

  // Toggle Submenu
  function toggleSubMenu() {
    const subMenu = document.querySelector('.sub-menu');
    subMenu.classList.toggle('active');
  }

  // Optional: Add smooth scrolling for carousel slides
  // You can integrate libraries like Slick Carousel or Swiper for advanced features


  