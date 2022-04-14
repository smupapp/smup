const DATA = {}

DATA.TOOLS = [
  {
    "title": "Recon",
    "tools": [
      {
        "title": "Subdomain",
        "tools": [
          {
            "title": "Sublist3r",
            "url": "https://github.com/aboul3la/Sublist3r",
            "description": "Fast subdomains enumeration tool for penetration testers",
            "source": "github"
          },
          {
            "title": "Amass",
            "url": "https://github.com/OWASP/Amass",
            "description": "In-depth Attack Surface Mapping and Asset Discovery",
            "source": "github"
          },
          {
            "title": "massdns",
            "url": "https://github.com/blechschmidt/massdns",
            "description": "A high-performance DNS stub resolver for bulk lookups and reconnaissance (subdomain enumeration)",
            "source": "github"
          },
          {
            "title": "Findomain",
            "url": "https://github.com/Findomain/Findomain",
            "description": "The fastest and cross-platform subdomain enumerator, do not waste your time.",
            "source": "github"
          },
          {
            "title": "Sudomy",
            "url": "https://github.com/Screetsec/Sudomy",
            "description": "Sudomy is a subdomain enumeration tool to collect subdomains and analyzing domains performing automated reconnaissance (recon) for bug hunting / pentesting",
            "source": "github"
          },
          {
            "title": "chaos-client",
            "url": "https://github.com/projectdiscovery/chaos-client",
            "description": "Go client to communicate with Chaos DNS API.",
            "source": "github"
          },
          {
            "title": "domained",
            "url": "https://github.com/TypeError/domained",
            "description": "Multi Tool Subdomain Enumeration",
            "source": "github"
          },
          {
            "title": "bugcrowd-levelup-subdomain-enumeration",
            "url": "https://github.com/appsecco/bugcrowd-levelup-subdomain-enumeration",
            "description": "This repository contains all the material from the talk \"Esoteric sub-domain enumeration techniques\" given at Bugcrowd LevelUp 2017 virtual conference",
            "source": "github"
          },
          {
            "title": "shuffledns",
            "url": "https://github.com/projectdiscovery/shuffledns",
            "description": "shuffleDNS is a wrapper around massdns written in go that allows you to enumerate valid subdomains using active bruteforce as well as resolve subdomains with wildcard handling and easy input-output…",
            "source": "github"
          },
          {
            "title": "censys-subdomain-finder",
            "url": "https://github.com/christophetd/censys-subdomain-finder",
            "description": "Perform subdomain enumeration using the certificate transparency logs from Censys.",
            "source": "github"
          },
          {
            "title": "Turbolist3r",
            "url": "https://github.com/fleetcaptain/Turbolist3r",
            "description": "Subdomain enumeration tool with analysis features for discovered domains",
            "source": "github"
          }
        ]
      },
      {
        "title": "Port Scanning",
        "tools": [
          {
            "title": "masscan",
            "url": "https://github.com/robertdavidgraham/masscan",
            "description": "TCP port scanner, spews SYN packets asynchronously, scanning entire Internet in under 5 minutes.",
            "source": "github"
          },
          {
            "title": "RustScan",
            "url": "https://github.com/RustScan/RustScan",
            "description": "The Modern Port Scanner",
            "source": "github"
          },
          {
            "title": "naabu",
            "url": "https://github.com/projectdiscovery/naabu",
            "description": "A fast port scanner written in go with focus on reliability and simplicity.",
            "source": "github"
          },
          {
            "title": "nmap",
            "url": "https://github.com/nmap/nmap",
            "description": "Nmap - the Network Mapper. Github mirror of official SVN repository.",
            "source": "github"
          },
          {
            "title": "sandmap",
            "url": "https://github.com/trimstray/sandmap",
            "description": "Nmap on steroids. Simple CLI with the ability to run pure Nmap engine, 31 modules with 459 scan profiles.",
            "source": "github"
          },
          {
            "title": "ScanCannon",
            "url": "https://github.com/johnnyxmas/ScanCannon",
            "description": "Combines the speed of masscan with the reliability and detailed enumeration of nmap",
            "source": "github"
          }
        ]
      },
      {
        "title": "Screenshots",
        "tools": [
          {
            "title": "EyeWitness",
            "url": "https://github.com/FortyNorthSecurity/EyeWitness",
            "description": "EyeWitness is designed to take screenshots of websites, provide some server header info, and identify default credentials if possible.",
            "source": "github"
          },
          {
            "title": "aquatone",
            "url": "https://github.com/michenriksen/aquatone",
            "description": "Aquatone is a tool for visual inspection of websites across a large amount of hosts and is convenient for quickly gaining an overview of HTTP-based attack surface.",
            "source": "github"
          },
          {
            "title": "screenshoteer",
            "url": "https://github.com/vladocar/screenshoteer",
            "description": "Make website screenshots and mobile emulations from the command line.",
            "source": "github"
          }
        ]
      },
      {
        "title": "Technologies",
        "tools": [
          {
            "title": "wappalyzer",
            "url": "https://github.com/AliasIO/wappalyzer",
            "description": "Identify technology on websites.",
            "source": "github"
          },
          {
            "title": "webanalyze",
            "url": "https://github.com/rverton/webanalyze",
            "description": "Port of Wappalyzer (uncovers technologies used on websites) to automate mass scanning.",
            "source": "github"
          },
          {
            "title": "python-builtwith",
            "url": "https://github.com/claymation/python-builtwith",
            "description": "BuiltWith API client",
            "source": "github"
          }
        ]
      },
      {
        "title": "Content Discovery",
        "tools": [
          {
            "title": "gobuster",
            "url": "https://github.com/OJ/gobuster",
            "description": "Directory/File, DNS and VHost busting tool written in Go",
            "source": "github"
          },
          {
            "title": "recursebuster",
            "url": "https://github.com/C-Sto/recursebuster",
            "description": "rapid content discovery tool for recursively querying webservers, handy in pentesting and web application assessments",
            "source": "github"
          },
          {
            "title": "feroxbuster",
            "url": "https://github.com/epi052/feroxbuster",
            "description": "A fast, simple, recursive content discovery tool written in Rust.",
            "source": "github"
          },
          {
            "title": "dirsearch",
            "url": "https://github.com/maurosoria/dirsearch",
            "description": "Web path scanner",
            "source": "github"
          },
          {
            "title": "dirsearch",
            "url": "https://github.com/evilsocket/dirsearch",
            "description": "A Go implementation of dirsearch.",
            "source": "github"
          }
        ]
      },
      {
        "title": "Links",
        "tools": [
          {
            "title": "LinkFinder",
            "url": "https://github.com/GerbenJavado/LinkFinder",
            "description": "A python script that finds endpoints in JavaScript files",
            "source": "github"
          },
          {
            "title": "JS-Scan",
            "url": "https://github.com/zseano/JS-Scan",
            "description": "a .js scanner, built in php. designed to scrape urls and other info",
            "source": "github"
          },
          {
            "title": "LinksDumper",
            "url": "https://github.com/arbazkiraak/LinksDumper",
            "description": "Extract (links/possible endpoints) from responses & filter them via decoding/sorting",
            "source": "github"
          },
          {
            "title": "GoLinkFinder",
            "url": "https://github.com/0xsha/GoLinkFinder",
            "description": "A fast and minimal JS endpoint extractor",
            "source": "github"
          },
          {
            "title": "BurpJSLinkFinder",
            "url": "https://github.com/InitRoot/BurpJSLinkFinder",
            "description": "Burp Extension for a passive scanning JS files for endpoint links.",
            "source": "github"
          },
          {
            "title": "urlgrab",
            "url": "https://github.com/IAmStoxe/urlgrab",
            "description": "A golang utility to spider through a website searching for additional links.",
            "source": "github"
          }
        ]
      },
      {
        "title": "Parameters",
        "tools": [
          {
            "title": "parameth",
            "url": "https://github.com/maK-/parameth",
            "description": "This tool can be used to brute discover GET and POST parameters",
            "source": "github"
          },
          {
            "title": "param-miner",
            "url": "https://github.com/PortSwigger/param-miner",
            "description": "This extension identifies hidden, unlinked parameters. It's particularly useful for finding web cache poisoning vulnerabilities.",
            "source": "github"
          },
          {
            "title": "ParamPamPam",
            "url": "https://github.com/Bo0oM/ParamPamPam",
            "description": "This tool for brute discover GET and POST parameters.",
            "source": "github"
          },
          {
            "title": "Arjun",
            "url": "https://github.com/s0md3v/Arjun",
            "description": "HTTP parameter discovery suite.",
            "source": "github"
          },
          {
            "title": "ParamSpider",
            "url": "https://github.com/devanshbatham/ParamSpider",
            "description": "Mining parameters from dark corners of Web Archives",
            "source": "github"
          }
        ]
      },
      {
        "title": "Fuzzing",
        "tools": [
          {
            "title": "wfuzz",
            "url": "https://github.com/xmendez/wfuzz",
            "description": "Web application fuzzer",
            "source": "github"
          },
          {
            "title": "ffuf",
            "url": "https://github.com/ffuf/ffuf",
            "description": "Fast web fuzzer written in Go",
            "source": "github"
          },
          {
            "title": "fuzzdb",
            "url": "https://github.com/fuzzdb-project/fuzzdb",
            "description": "Dictionary of attack patterns and primitives for black-box application fault injection and resource discovery.",
            "source": "github"
          }
        ]
      }
    ]
  },
  {
    "title": "Exploitation",
    "tools": [{
        "title": "Command Injection",
        "tools": []
      },
      {
        "title": "CORS Misconfiguration",
        "tools": []
      },
      {
        "title": "CRLF Injection",
        "tools": []
      },
      {
        "title": "Directory Traversal",
        "tools": []
      },
      {
        "title": "File Inclusion",
        "tools": []
      },
      {
        "title": "Graphql Inclusion",
        "tools": []
      },
      {
        "title": "Header Injection",
        "tools": []
      },
      {
        "title": "Insecure Deserialization",
        "tools": []
      },
      {
        "title": "Insecure Direct Object References",
        "tools": []
      },
      {
        "title": "Open Redirect",
        "tools": []
      },
      {
        "title": "Race Condition",
        "tools": []
      },
      {
        "title": "Request Smuggling",
        "tools": []
      },
      {
        "title": "Server Side Request",
        "tools": []
      },
      {
        "title": "SQL Injection",
        "tools": []
      },
      {
        "title": "XSS Injection",
        "tools": []
      },
      {
        "title": "XXE Injection",
        "tools": []
      }
    ]
  },
  {
    "title": "Miscellaneous",
    "tools": [{
        "title": "Passwords",
        "tools": []
      },
      {
        "title": "Secrets",
        "tools": []
      },
      {
        "title": "Git",
        "tools": []
      },
      {
        "title": "Buckets",
        "tools": []
      },
      {
        "title": "CMS",
        "tools": []
      },
      {
        "title": "JSON Web Token",
        "tools": []
      },
      {
        "title": "postMessage",
        "tools": []
      },
      {
        "title": "Subdomain Takeover",
        "tools": []
      },
      {
        "title": "Uncategorized",
        "tools": []
      }
    ]
  }
];


DATA.CATEGORIES = [];


for (let category of DATA.TOOLS) {
  
  for (let tool of category.tools) {

    const parentTitle = category.title.toLowerCase().split(' ');
    const title = tool.title.toLowerCase().split(' ');

    DATA.CATEGORIES.push({
      id: `${parentTitle.join('-')}-${title.join('-')}`,
      title: tool.title,
      tags: `${parentTitle.join(',')},${title.join(',')}`
    })
  }
}


module.exports = DATA;