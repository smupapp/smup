const DATA = {}

DATA.TOOLS = [
  {
    "title": "Sublist3r",
    "url": "https://github.com/aboul3la/Sublist3r",
    "description": "Fast subdomains enumeration tool for penetration testers",
    "fullDescription": "Sublist3r is a python tool designed to enumerate subdomains of websites using OSINT. It helps penetration testers and bug hunters collect and gather subdomains for the domain they are targeting. Sublist3r enumerates subdomains using many search engines such as Google, Yahoo, Bing, Baidu and Ask. Sublist3r also enumerates subdomains using Netcraft, Virustotal, ThreatCrowd, DNSdumpster and ReverseDNS. subbrute was integrated with Sublist3r to increase the possibility of finding more subdomains using bruteforce with an improved wordlist. The credit goes to TheRook who is the author of subbrute.",
    "installLocation": "$ cd /tmp/smup/Sublist3r/",
    "usages": [
      "$ python3 /tmp/smup/Sublist3r/sublist3r.py -h",
      "$ python3 /tmp/smup/Sublist3r/sublist3r.py -d example.com",
      "$ python3 /tmp/smup/Sublist3r/sublist3r.py -d example.com -p 80,443",
      "$ python3 /tmp/smup/Sublist3r/sublist3r.py -e google,yahoo,virustotal -d example.com"
    ],
    "combineUsages": [],
    "source": "github",
    "id": "github-com-aboul3la-Sublist3r",
    "categories": [
      "subdomain",
      "recon"
    ],
    "images": [
      "https://camo.githubusercontent.com/ad4d6fc3d97b9d05593267ac6e6210075180a5262c9541e4ca7c0b38051a2920/687474703a2f2f7777772e7365636765656b2e6e65742f696d616765732f5375626c69737433722e706e67"
    ],
    "preInstall": {
      "label": "Verifying installation of sublist3r",
      "command": {
        "darwin": "python3 /tmp/smup/Sublist3r/sublist3r.py -h",
        "linux": "python3 /tmp/smup/Sublist3r/sublist3r.py -h"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "Python3 is required",
          "command": {
            "darwin": "python3 -V",
            "linux": "python3 -V"
          }
        },
        {
          "error": "Git is required",
          "command": {
            "darwin": "git --version",
            "linux": "git --version"
          }
        },
      ]
    },
    "installation": [
      {
        "label": "Clone repository",
        "labelSuccess": "Repository cloned",
        "error": "Repository cloning failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/Sublist3r && mkdir -p /tmp/smup/ && cd /tmp/smup && git clone https://github.com/aboul3la/Sublist3r",
          "linux": "rm -rf /tmp/smup/Sublist3r && mkdir -p /tmp/smup/ && cd /tmp/smup && git clone https://github.com/aboul3la/Sublist3r"
        },
      },
      {
        "label": "Install dependencies",
        "labelSuccess": "Dependencies Installed",
        "error": "Dependencies installation failed",
        "command": {
          "darwin": "cd /tmp/smup/Sublist3r && pip3 install -r requirements.txt",
          "linux": "cd /tmp/smup/Sublist3r && pip3 install -r requirements.txt"
        }
      },
      {
        "label": "Verifying command sublist3r",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "python3 /tmp/smup/Sublist3r/sublist3r.py -h",
          "linux": "python3 /tmp/smup/Sublist3r/sublist3r.py -h"
        }
      }
    ]
  },
  {
    "title": "Findomain",
    "url": "https://github.com/Findomain/Findomain",
    "description": "The fastest and cross-platform subdomain enumerator, do not waste your time.",
    "installLocation": "$ cd /tmp/smup/Findomain",
    "usages": [
      "$ /tmp/smup/Findomain/findomain -t example.com",
      "$ /tmp/smup/Findomain/findomain -t example.com -u subdomains.txt",
      "$ /tmp/smup/Findomain/findomain -t example.com -r -u resolved-subdomains.txt",
      "$ /tmp/smup/Findomain/findomain -f file_with_domains.txt"
    ],
    "combineUsages": [],
    "source": "github",
    "id": "github-com-Findomain-Findomain",
    "categories": [
      "subdomain",
      "recon"
    ],
    "images": [],
    "preInstall": {
      "label": "Verifying installation of finddomain",
      "command": {
        "darwin": "/tmp/smup/Findomain/findomain -V",
        "linux": "/tmp/smup/Findomain/findomain -V"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "wget is required",
          "command": {
            "darwin": "wget --version",
            "linux": "wget --version"
          }
        }
      ]
    },
    "installation": [
      {
        "label": "Download Findomain binary",
        "labelSuccess": "Findomain binary downloaded",
        "error": "Download of binary failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/Findomain && mkdir -p /tmp/smup/Findomain && cd /tmp/smup/Findomain && wget -O findomain --quiet https://github.com/findomain/findomain/releases/latest/download/findomain-osx && chmod +x findomain",
          "linux": "rm -rf /tmp/smup/Findomain && mkdir -p /tmp/smup/Findomain && cd /tmp/smup/Findomain && wget -O findomain --quiet https://github.com/findomain/findomain/releases/latest/download/findomain-linux && chmod +x findomain"
        },
      },
      {
        "label": "Verifying command findomain",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "/tmp/smup/Findomain/findomain --version",
          "linux": "/tmp/smup/Findomain/findomain --version"
        }
      }
    ]
  },
  {
    "title": "chaos-client",
    "url": "https://github.com/projectdiscovery/chaos-client",
    "description": "Go client to communicate with Chaos DNS API.",
    "installLocation": "$ cd /tmp/smup/Chaos",
    "usages": [
      "$ /tmp/smup/Chaos/chaos -d example.com",
      "$ /tmp/smup/Chaos/chaos -d example.com -silent",
      "$ /tmp/smup/Chaos/chaos -d example.com -o example.txt",
      "$ /tmp/smup/Chaos/chaos -dL domains.txt"
    ],
    "combineUsages": [],
    "source": "github",
    "id": "github-com-projectdiscovery-chaos-client",
    "categories": [
      "subdomain",
      "recon"
    ],
    "images": [],
    "preInstall": {
      "label": "Verifying installation of chaos",
      "command": {
        "darwin": "/tmp/smup/Chaos/chaos -version",
        "linux": "/tmp/smup/Chaos/chaos -version"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "wget is required",
          "command": {
            "darwin": "wget --version",
            "linux": "wget --version"
          }
        }
      ]
    },
    "installation": [
      {
        "label": "Install Chaos",
        "labelSuccess": "Chaos installed",
        "error": "Chaos installation failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/Chaos && mkdir -p /tmp/smup/ && cd /tmp/smup/ && wget -O chaos.zip --quiet https://github.com/projectdiscovery/chaos-client/releases/download/v0.2.0/chaos-client_0.2.0_macOS_amd64.zip && unzip -d Chaos chaos.zip && rm chaos.zip && mv Chaos/chaos-client Chaos/chaos",
          "linux": "rm -rf /tmp/smup/Chaos && mkdir -p /tmp/smup/ && cd /tmp/smup/ && wget -O chaos.zip --quiet https://github.com/projectdiscovery/chaos-client/releases/download/v0.2.0/chaos-client_0.2.0_linux_amd64.zip && unzip -d Chaos chaos.zip && rm chaos.zip && mv Chaos/chaos-client Chaos/chaos"
        },
      },
      {
        "label": "Verifying command chaos",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "/tmp/smup/Chaos/chaos -version",
          "linux": "/tmp/smup/Chaos/chaos -version"
        }
      }
    ]
  },
  {
    "title": "naabu",
    "url": "https://github.com/projectdiscovery/naabu",
    "description": "A fast port scanner written in go with focus on reliability and simplicity.",
    "installLocation": "$ cd /tmp/smup/Naabu",
    "usages": [
      "$ /tmp/smup/Naabu/naabu -p 80,443,21-23 -host example.com",
      "$ /tmp/smup/Naabu/naabu -list hosts.txt",
      "$ /tmp/smup/Naabu/naabu -host 104.16.99.52 -json"
    ],
    "combineUsages": [
      "$ echo example.com | /tmp/smup/Naabu/naabu -silent | /tml/smup/Httpx/httpx -silent"
    ],
    "source": "github",
    "id": "github-com-projectdiscovery-naabu",
    "categories": [
      "port scanning",
      "recon"
    ],
    "images": [],
    "preInstall": {
      "label": "Verifying installation of naabu",
      "command": {
        "darwin": "/tmp/smup/Naabu/naabu -version",
        "linux": "/tmp/smup/Naabu/naabu -version"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "wget is required",
          "command": {
            "darwin": "wget --version",
            "linux": "wget --version"
          }
        }
      ]
    },
    "installation": [
      {
        "label": "Install Naabu",
        "labelSuccess": "Naabu installed",
        "error": "Naabu installation failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/Naabu && mkdir -p /tmp/smup/ && cd /tmp/smup/ && wget -O naabu.zip --quiet https://github.com/projectdiscovery/naabu/releases/download/v2.0.6/naabu_2.0.6_macOS_amd64.zip && unzip -d Naabu naabu.zip && rm -rf naabu.zip",
          "linux": "rm -rf /tmp/smup/Naabu && mkdir -p /tmp/smup/ && cd /tmp/smup/ && wget -O naabu.zip --quiet https://github.com/projectdiscovery/naabu/releases/download/v2.0.6/naabu_2.0.6_linux_amd64.zip && unzip -d Naabu naabu.zip && rm -rf naabu.zip"
        },
      },
      {
        "label": "Verifying command naabu",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "/tmp/smup/Naabu/naabu -version",
          "linux": "/tmp/smup/Naabu/naabu -version"
        }
      }
    ]
  },
  {
    "title": "webanalyze",
    "url": "https://github.com/rverton/webanalyze",
    "description": "Port of Wappalyzer (uncovers technologies used on websites) to automate mass scanning.",
    "installLocation": "$ cd /tmp/smup/WebAnalyze",
    "usages": [
      "$ /tmp/smup/WebAnalyze/webanalyze -update # loads new technologies.json file from wappalyzer project",
      "$ /tmp/smup/WebAnalyze/webanalyze -host example.com -crawl 1",
      "$ /tmp/smup/WebAnalyze/webanalyze -host example.com -crawl 1 -output csv"
    ],
    "source": "github",
    "id": "github-com-rverton-webanalyze",
    "categories": [
      "technologies",
      "recon"
    ],
    "images": [],
    "preInstall": {
      "label": "Verifying installation of webanalyze",
      "command": {
        "darwin": "/tmp/smup/WebAnalyze/webanalyze",
        "linux": "/tmp/smup/WebAnalyze/webanalyze"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "wget is required",
          "command": {
            "darwin": "wget --version",
            "linux": "wget --version"
          }
        }
      ]
    },
    "installation": [
      {
        "label": "Install WebAnalyze",
        "labelSuccess": "WebAnalyze installed",
        "error": "WebAnalyze installation failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/WebAnalyze && mkdir -p /tmp/smup/WebAnalyze && cd /tmp/smup/ && wget -O webanalyze.tar.gz --quiet https://github.com/rverton/webanalyze/releases/download/v0.3.6/webanalyze_0.3.6_Darwin_x86_64.tar.gz && tar -xvzf webanalyze.tar.gz -C WebAnalyze && rm webanalyze.tar.gz",
          "linux": "rm -rf /tmp/smup/WebAnalyze && mkdir -p /tmp/smup/WebAnalyze && cd /tmp/smup/ && wget -O webanalyze.tar.gz --quiet https://github.com/rverton/webanalyze/releases/download/v0.3.6/webanalyze_0.3.6_Linux_x86_64.tar.gz && tar -xvzf webanalyze.tar.gz -C WebAnalyze && rm webanalyze.tar.gz"
        },
      },
      {
        "label": "Verifying command naabu",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "/tmp/smup/WebAnalyze/webanalyze",
          "linux": "/tmp/smup/WebAnalyze/webanalyze"
        }
      }
    ]
  },
  {
    "title": "feroxbuster",
    "url": "https://github.com/epi052/feroxbuster",
    "description": "A fast, simple, recursive content discovery tool written in Rust.",
    "installLocation": "$ cd /tmp/smup/FeroxBuster/",
    "usages": [
      "$ /tmp/smup/FeroxBuster/feroxbuster -u http://example.com -x pdf -x js,html -x php txt json,docx",
      "$ cat targets | /tmp/smup/FeroxBuster/feroxbuster --stdin --silent -s 200 301 302 --redirects -x js",
      "$ /tmp/smup/FeroxBuster/feroxbuster -u http://example.com --insecure --proxy http://127.0.0.1:8080",
      "$ /tmp/smup/FeroxBuster/feroxbuster -u http://example.com --query token=0123456789ABCDEF"
    ],
    "source": "github",
    "id": "github-com-epi052-feroxbuster",
    "categories": [
      "content discovery",
      "recon"
    ],
    "images": [],
    "preInstall": {
      "label": "Verifying installation of naabu",
      "command": {
        "darwin": "/tmp/smup/FeroxBuster/feroxbuster --help",
        "linux": "/tmp/smup/FeroxBuster/feroxbuster --help"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "wget is required",
          "command": {
            "darwin": "wget --version",
            "linux": "wget --version"
          }
        }
      ]
    },
    "installation": [
      {
        "label": "Install FeroxBuster",
        "labelSuccess": "FeroxBuster installed",
        "error": "FeroxBuster installation failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/FeroxBuster && mkdir -p /tmp/smup/ && cd /tmp/smup/ && wget -O feroxbuster.zip --quiet https://github.com/epi052/feroxbuster/releases/download/2.7.0/x86_64-macos-feroxbuster.zip && unzip -d FeroxBuster feroxbuster.zip && rm feroxbuster.zip && chmod +x FeroxBuster/feroxbuster",
          "linux": "rm -rf /tmp/smup/FeroxBuster && mkdir -p /tmp/smup/ && cd /tmp/smup/ && wget -O feroxbuster.zip --quiet https://github.com/epi052/feroxbuster/releases/download/2.7.0/x86_64-linux-feroxbuster.zip && unzip -d FeroxBuster feroxbuster.zip && rm feroxbuster.zip && chmod +x FeroxBuster/feroxbuster"
        },
      },
      {
        "label": "Verifying command feroxbuster",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "/tmp/smup/FeroxBuster/feroxbuster --help",
          "linux": "/tmp/smup/FeroxBuster/feroxbuster --help"
        }
      }
    ]
  },
  {
    "title": "LinkFinder",
    "url": "https://github.com/GerbenJavado/LinkFinder",
    "description": "A python script that finds endpoints in JavaScript files",
    "installLocation": "$ cd /tmp/smup/LinkFinder",
    "usages": [
      "$ python3 /tmp/smup/LinkFinder/linkfinder.py -i https://example.com -d",
      "$ python3 /tmp/smup/LinkFinder/linkfinder.py -i https://example.com/1.js -o results.html",
      "$ python3 /tmp/smup/LinkFinder/linkfinder.py -i https://example.com/1.js -o cli",
      "$ python3 /tmp/smup/LinkFinder/linkfinder.py -i burpfile -b",
      "$ python3 /tmp/smup/LinkFinder/linkfinder.py -i 'Desktop/*.js' -r ^/api/ -o results.html"
    ],
    "source": "github",
    "id": "github-com-GerbenJavado-LinkFinder",
    "categories": [
      "links",
      "recon"
    ],
    "images": [],
    "preInstall": {
      "label": "Verifying installation of LinkFinder",
      "command": {
        "darwin": "python3 /tmp/smup/LinkFinder/linkfinder.py -h",
        "linux": "python3 /tmp/smup/LinkFinder/linkfinder.py -h"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "Python3 is required",
          "command": {
            "darwin": "python3 -V",
            "linux": "python3 -V"
          }
        },
        {
          "error": "Git is required",
          "command": {
            "darwin": "git --version",
            "linux": "git --version"
          }
        },
      ]
    },
    "installation": [
      {
        "label": "Clone repository",
        "labelSuccess": "Repository cloned",
        "error": "Repository cloning failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/LinkFinder && mkdir -p /tmp/smup/ && cd /tmp/smup && git clone https://github.com/GerbenJavado/LinkFinder",
          "linux": "rm -rf /tmp/smup/LinkFinder && mkdir -p /tmp/smup/ && cd /tmp/smup && git clone https://github.com/GerbenJavado/LinkFinder"
        },
      },
      {
        "label": "Install dependencies",
        "labelSuccess": "Dependencies Installed",
        "error": "Dependencies installation failed",
        "command": {
          "darwin": "cd /tmp/smup/LinkFinder && pip3 install -r requirements.txt",
          "linux": "cd /tmp/smup/LinkFinder && pip3 install -r requirements.txt"
        }
      },
      {
        "label": "Verifying command sublist3r",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "python3 /tmp/smup/LinkFinder/linkfinder.py -h",
          "linux": "python3 /tmp/smup/LinkFinder/linkfinder.py -h"
        }
      }
    ]
  },
  {
    "title": "ParamSpider",
    "url": "https://github.com/devanshbatham/ParamSpider",
    "description": "Mining parameters from dark corners of Web Archives",
    "installLocation": "$ cd /tmp/smup/ParamSpider",
    "usages": [
      "$ python3 /tmp/smup/ParamSpider/paramspider.py --domain example.com",
      "$ python3 /tmp/smup/ParamSpiter/paramspider.py --domain example.com --exclude php,jpg,svg",
      "$ python3 /tmp/smup/ParamSpiter/paramspider.py --domain example.com --subs False",
      "$ python3 /tmp/smup/ParamSpiter/paramspider.py --domain example.com --exclude php,jpg --output example.txt"
    ],
    "source": "github",
    "id": "github-com-devanshbatham-ParamSpider",
    "categories": [
      "parameters",
      "recon"
    ],
    "images": [],
    "preInstall": {
      "label": "Verifying installation of LinkFinder",
      "command": {
        "darwin": "python3 /tmp/smup/ParamSpider/paramspider.py -h",
        "linux": "python3 /tmp/smup/ParamSpider/paramspider.py -h"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "Python3 is required",
          "command": {
            "darwin": "python3 -V",
            "linux": "python3 -V"
          }
        },
        {
          "error": "Git is required",
          "command": {
            "darwin": "git --version",
            "linux": "git --version"
          }
        },
      ]
    },
    "installation": [
      {
        "label": "Clone repository",
        "labelSuccess": "Repository cloned",
        "error": "Repository cloning failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/ParamSpider && mkdir -p /tmp/smup/ && cd /tmp/smup && git clone https://github.com/devanshbatham/ParamSpider",
          "linux": "rm -rf /tmp/smup/ParamSpider && mkdir -p /tmp/smup/ && cd /tmp/smup && git clone https://github.com/devanshbatham/ParamSpider"
        },
      },
      {
        "label": "Install dependencies",
        "labelSuccess": "Dependencies Installed",
        "error": "Dependencies installation failed",
        "command": {
          "darwin": "cd /tmp/smup/ParamSpider && pip3 install -r requirements.txt",
          "linux": "cd /tmp/smup/ParamSpider && pip3 install -r requirements.txt"
        }
      },
      {
        "label": "Verifying command paramspider",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "python3 /tmp/smup/ParamSpider/paramspider.py -h",
          "linux": "python3 /tmp/smup/ParamSpider/paramspider.py -h"
        }
      }
    ]
  },
  {
    "title": "wfuzz",
    "url": "https://github.com/xmendez/wfuzz",
    "description": "Web application fuzzer",
    "installLocation": "$ cd /tmp/smup/wfuzz",
    "usages": [
      "$ python3 /tmp/smup/wfuzz/src/wfuzz-cli.py -w wordlist/general/common.txt --hc 404 http://example.com/FUZZ",
      "$ python3 tmp/smup/wfuzz/src/wfuzz-cli.py -f /tmp/outfile.json -w /tmp/smup/wfuzz/wordlist/general/common.txt http://example.com/FUZZ",
      "$ python3 tmp/smup/wfuzz/src/wfuzz-cli.py -o json -w /tmp/smup/wfuzz/wordlist/general/common.txt http://example.com/FUZZ"
    ],
    "source": "github",
    "id": "github-com-xmendez-wfuzz",
    "categories": [
      "fuzzing",
      "recon"
    ],
    "images": [],
    "preInstall": {
      "label": "Verifying installation of wfuzz",
      "command": {
        "darwin": "python3 /tmp/smup/wfuzz/src/wfuzz-cli.py -h",
        "linux": "python3 /tmp/smup/wfuzz/src/wfuzz-cli.py -h"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "Python3 is required",
          "command": {
            "darwin": "python3 -V",
            "linux": "python3 -V"
          }
        },
        {
          "error": "Git is required",
          "command": {
            "darwin": "git --version",
            "linux": "git --version"
          }
        },
      ]
    },
    "installation": [
      {
        "label": "Clone repository",
        "labelSuccess": "Repository cloned",
        "error": "Repository cloning failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/wfuzz && mkdir -p /tmp/smup/ && cd /tmp/smup && git clone https://github.com/xmendez/wfuzz",
          "linux": "rm -rf /tmp/smup/wfuzz && mkdir -p /tmp/smup/ && cd /tmp/smup && git clone https://github.com/xmendez/wfuzz"
        },
      },
      {
        "label": "Install dependencies",
        "labelSuccess": "Dependencies Installed",
        "error": "Dependencies installation failed",
        "command": {
          "darwin": "cd /tmp/smup/wfuzz && pip3 install -r requirements.txt",
          "linux": "cd /tmp/smup/wfuzz && pip3 install -r requirements.txt"
        }
      },
      {
        "label": "Verifying command wfuzz",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "python3 /tmp/smup/wfuzz/src/wfuzz-cli.py -h",
          "linux": "python3 /tmp/smup/wfuzz/src/wfuzz-cli.py -h"
        }
      }
    ]
  },
  {
    "title": "ffuf",
    "url": "https://github.com/ffuf/ffuf",
    "description": "Fast web fuzzer written in Go",
    "installLocation": "$ cd /tmp/smup/FFUF",
    "usages": [
      "$ /tmp/smup/FFUF/ffuf -w /path/to/wordlist -u https://example.com/FUZZ",
      "$ /tmp/smup/FFUF/ffuf -w /path/to/vhost/wordlist -u https://example.com -H \"Host: FUZZ\" -fs 4242",
      "$ /tmp/smup/FFUF/ffuf -w /path/to/values.txt -u https://example.com/script.php?valid_name=FUZZ -fc 401",
      "$ /tmp/smup/FFUF/ffuf -w /path/to/paramnames.txt -u https://example.com/script.php?FUZZ=test_value -fs 4242",
      "$ /tmp/smup/FFUF/ffuf -w /path/to/postdata.txt -X POST -d \"username=admin\&password=FUZZ\" -u https://example.com/login.php -fc 401"
    ],
    "source": "github",
    "id": "github-com-ffuf-ffuf",
    "categories": [
      "fuzzing",
      "recon"
    ],
    "images": [],
    "preInstall": {
      "label": "Verifying installation of ffuf",
      "command": {
        "darwin": "/tmp/smup/FFUF/ffuf -V",
        "linux": "/tmp/smup/FFUF/ffuf -V"
      }
    },
    "prerequisites": {
      "label": "Verifying Pre-requisites",
      "labelSuccess": "Pre-requisites Verified",
      "commands": [
        {
          "error": "wget is required",
          "command": {
            "darwin": "wget --version",
            "linux": "wget --version"
          }
        }
      ]
    },
    "installation": [
      {
        "label": "Download ffuf binary",
        "labelSuccess": "ffuf binary downloaded",
        "error": "Download of binary failed",
        "command": {
          "darwin": "rm -rf /tmp/smup/FFUF && mkdir -p /tmp/smup/FFUF && cd /tmp/smup/ && wget -O ffuf.tar.gz --quiet https://github.com/ffuf/ffuf/releases/download/v1.4.1/ffuf_1.4.1_macOS_amd64.tar.gz && tar -xvzf ffuf.tar.gz -C FFUF && rm ffuf.tar.gz",
          "linux": "rm -rf /tmp/smup/FFUF && mkdir -p /tmp/smup/FFUF && cd /tmp/smup/ && wget -O ffuf.tar.gz --quiet https://github.com/ffuf/ffuf/releases/download/v1.4.1/ffuf_1.4.1_linux_amd64.tar.gz && tar -xvzf ffuf.tar.gz -C FFUF && rm ffuf.tar.gz"
        },
      },
      {
        "label": "Verifying command findomain",
        "labelSuccess": "App is ready to use",
        "error": "App not installed",
        "command": {
          "darwin": "/tmp/smup/FFUF/ffuf -V",
          "linux": "/tmp/smup/FFUF/ffuf -V"
        }
      }
    ]
  }
];


DATA.CATEGORIES = [
  {
    "id": "recon-subdomain",
    "title": "Subdomain",
    "tags": "recon,subdomain"
  },
  {
    "id": "recon-port-scanning",
    "title": "Port Scanning",
    "tags": "recon,port,scanning"
  },
  {
    "id": "recon-screenshots",
    "title": "Screenshots",
    "tags": "recon,screenshots"
  },
  {
    "id": "recon-technologies",
    "title": "Technologies",
    "tags": "recon,technologies"
  },
  {
    "id": "recon-content-discovery",
    "title": "Content Discovery",
    "tags": "recon,content,discovery"
  },
  {
    "id": "recon-links",
    "title": "Links",
    "tags": "recon,links"
  },
  {
    "id": "recon-parameters",
    "title": "Parameters",
    "tags": "recon,parameters"
  },
  {
    "id": "recon-fuzzing",
    "title": "Fuzzing",
    "tags": "recon,fuzzing"
  },
  {
    "id": "exploitation-command-injection",
    "title": "Command Injection",
    "tags": "exploitation,command,injection"
  },
  {
    "id": "exploitation-cors-misconfiguration",
    "title": "CORS Misconfiguration",
    "tags": "exploitation,cors,misconfiguration"
  },
  {
    "id": "exploitation-crlf-injection",
    "title": "CRLF Injection",
    "tags": "exploitation,crlf,injection"
  },
  {
    "id": "exploitation-directory-traversal",
    "title": "Directory Traversal",
    "tags": "exploitation,directory,traversal"
  },
  {
    "id": "exploitation-file-inclusion",
    "title": "File Inclusion",
    "tags": "exploitation,file,inclusion"
  },
  {
    "id": "exploitation-graphql-inclusion",
    "title": "Graphql Inclusion",
    "tags": "exploitation,graphql,inclusion"
  },
  {
    "id": "exploitation-header-injection",
    "title": "Header Injection",
    "tags": "exploitation,header,injection"
  },
  {
    "id": "exploitation-insecure-deserialization",
    "title": "Insecure Deserialization",
    "tags": "exploitation,insecure,deserialization"
  },
  {
    "id": "exploitation-insecure-direct-object-references",
    "title": "Insecure Direct Object References",
    "tags": "exploitation,insecure,direct,object,references"
  },
  {
    "id": "exploitation-open-redirect",
    "title": "Open Redirect",
    "tags": "exploitation,open,redirect"
  },
  {
    "id": "exploitation-race-condition",
    "title": "Race Condition",
    "tags": "exploitation,race,condition"
  },
  {
    "id": "exploitation-request-smuggling",
    "title": "Request Smuggling",
    "tags": "exploitation,request,smuggling"
  },
  {
    "id": "exploitation-server-side-request",
    "title": "Server Side Request",
    "tags": "exploitation,server,side,request"
  },
  {
    "id": "exploitation-sql-injection",
    "title": "SQL Injection",
    "tags": "exploitation,sql,injection"
  },
  {
    "id": "exploitation-xss-injection",
    "title": "XSS Injection",
    "tags": "exploitation,xss,injection"
  },
  {
    "id": "exploitation-xxe-injection",
    "title": "XXE Injection",
    "tags": "exploitation,xxe,injection"
  },
  {
    "id": "miscellaneous-passwords",
    "title": "Passwords",
    "tags": "miscellaneous,passwords"
  },
  {
    "id": "miscellaneous-secrets",
    "title": "Secrets",
    "tags": "miscellaneous,secrets"
  },
  {
    "id": "miscellaneous-git",
    "title": "Git",
    "tags": "miscellaneous,git"
  },
  {
    "id": "miscellaneous-buckets",
    "title": "Buckets",
    "tags": "miscellaneous,buckets"
  },
  {
    "id": "miscellaneous-cms",
    "title": "CMS",
    "tags": "miscellaneous,cms"
  },
  {
    "id": "miscellaneous-json-web-token",
    "title": "JSON Web Token",
    "tags": "miscellaneous,json,web,token"
  },
  {
    "id": "miscellaneous-postmessage",
    "title": "postMessage",
    "tags": "miscellaneous,postmessage"
  },
  {
    "id": "miscellaneous-subdomain-takeover",
    "title": "Subdomain Takeover",
    "tags": "miscellaneous,subdomain,takeover"
  },
  {
    "id": "miscellaneous-uncategorized",
    "title": "Uncategorized",
    "tags": "miscellaneous,uncategorized"
  }
];


module.exports = DATA;