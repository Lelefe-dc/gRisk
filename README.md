# Guardrisk Website

Responsive, production-ready static website based on the supplied Guardrisk company profile and Low Cost Medical Aid brochure.

## Included
- Premium responsive homepage and corporate sections
- Sticky desktop navigation
- Mobile bottom-tab navigation (Home, Services, Plans, Quote, Contact)
- General Insurance, Bonds & Guarantees, Life & Health, and Risk Consulting sections
- Interactive Basic Starter / Basic Saver / Basic Plus plan selector
- Full responsive medical-aid comparison table
- Hospital Cash Plan comparison table and terms
- Base premium calculator for principal member, spouse, and children
- Phone, email and WhatsApp actions
- Company profile and medical-aid brochure downloads
- Docker + Nginx production deployment

## Run locally

### Quick static server
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

### Docker
```bash
docker build -t guardrisk-website .
docker run --rm -p 3000:80 guardrisk-website
```
Then open `http://localhost:3000`.

## Source note
The supplied materials show different floor references for the LNDC Centre address (Ground Floor in the company profile and 3rd Floor in the medical-aid brochure). The website therefore uses **LNDC Centre, Kingsway, Maseru 100** without specifying a floor until Guardrisk confirms the current office floor.

The quote calculator is an estimate of the published base principal/spouse/child premiums only. Final quotations, eligibility, policy wording, authorisations, managed-care rules and underwriting should be confirmed by Guardrisk.
# gRisk
