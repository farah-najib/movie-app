# automatiserade integrationstester med Vitest

- Alla API-anrop ska ha headern Authorization: Bearer ... .
- Använd beforeAll för att hämta JWT-token.
- Använd beforeEach och afterEach för att skapa och ta bort testdata.
- Verifiera alltid statuskod i varje test.
- Dela upp tester i logiska describe -block.
- Använd let createdMovie inuti varje describe för isolering.
