# Technical Decisions

## Decision Log
This file tracks key technical decisions and their rationale.

---

### 2026-01-16: Initial Tech Stack Selection

**Decision**: Use Next.js App Router instead of Pages Router

**Rationale**: 
- App Router is the modern, recommended approach
- Better Server Component support
- Simpler data fetching patterns
- Shows knowledge of current Next.js best practices

**Trade-offs**: 
- Slightly steeper learning curve
- More opinionated structure

---

### 2026-01-16: No Backend/Database

**Decision**: Skip Express/MongoDB backend, use direct API calls to PokeAPI

**Rationale**:
- PokeAPI is public and provides all needed data
- Adding backend adds complexity without value for this demo
- Demonstrates ability to assess when NOT to over-engineer
- Faster development cycle
- Easier deployment

**Trade-offs**:
- Dependent on PokeAPI uptime
- No data caching layer (acceptable for demo)

---

### 2026-01-16: TypeScript Required

**Decision**: Use TypeScript throughout the project

**Rationale**:
- Industry standard for production React/Next.js
- Catches errors at compile time
- Better IDE support and autocomplete
- Demonstrates professional development practices
- Interfaces for API responses improve code quality

**Trade-offs**:
- Slightly more verbose code
- Initial setup overhead (minimal with create-next-app)

---

### 2026-01-16: Three Specific Pokemon

**Decision**: Display Charizard (#6), Blastoise (#9), and Venusaur (#3)

**Rationale**:
- Classic starter evolutions - recognizable
- Good variety in visual design
- Static selection keeps Phase 1 simple
- Can add search/selection in Phase 3

**Alternative Considered**: Random Pokemon selection
**Why Rejected**: Adds unnecessary complexity and unpredictable UI testing

---

### 2026-01-16: Component Structure

**Decision**: Single reusable `PokemonCard` component

**Rationale**:
- DRY principle - display 3 cards with same component
- Easy to maintain and update styling
- Demonstrates component reusability
- Props-based approach is React best practice

---

### 2026-01-16: Server vs Client Components

**Decision**: Page component as Server Component, PokemonCard as Client Component (if interactivity needed)

**Rationale**:
- Fetch data on server for better performance
- Client components only where interactivity is required
- Follows Next.js 13+ best practices

**To be determined**: May keep PokemonCard as Server Component if no interactivity needed in Phase 1

---

### 2026-01-16: GitHub Actions for CI/CD

**Decision**: Implement CI/CD pipeline from Phase 1

**Rationale**:
- Catches errors before they reach production
- Ensures code quality standards are maintained
- Professional development practice
- Free for public repositories
- Multi-node version testing ensures compatibility
- Demonstrates DevOps awareness

**Pipeline includes**:
- Linting (ESLint)
- Type checking (TypeScript)
- Build verification
- Matrix testing on Node 18.x and 20.x

**Trade-offs**:
- Slightly longer PR/push feedback time
- Requires all checks to pass before merge (this is a feature, not a bug)

---

### 2026-01-16: Git Workflow Strategy

**Decision**: Main branch + feature branches, protected main

**Rationale**:
- Main branch always production-ready
- Feature branches for development
- CI checks before merge
- Clean commit history

**Branch naming convention**: `feature/component-name` or `fix/issue-description`

---

## Questions/Open Items
- [ ] Decide on specific stats to display (HP, Attack, Defense?)
- [ ] Color scheme: Pokemon type-based or custom palette?
- [ ] Animation approach: CSS transitions or framer-motion?