# EmployeeDetails

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


1. Create Folder and version check
cd D:\src\Employee    
node -v     
npm -v     

2. Create Angular Project and version check
ng new employee-details      
cd .\employee-details\

ng build   

npx ng version

npx ng build --verbose

ng serve --open

3. Create component
ng generate component home

ng generate component employees 

ng generate component contact 

ng generate component header --standalone   

ng generate component header 

ng generate component employees-detail
   
5. External Api call

ng generate service services/employees-api/employees-api
 
5. Create DTO 
ng g interface models/employee-dto

ng g interface models/contact-message-dto

Alright, here’s a neat, simple list of the **most useful Angular CLI generate commands**, what they create, and why you’d use them. I’ll keep it super clear so you can quickly refer to it.

---

## 🔧 **Common Angular Generate Commands & Their Purpose**

### **1. Component**

```
ng generate component <name>
ng g c <name>
```

**Purpose:**
Creates a new UI block (HTML + TS + CSS + spec). Use it for pages, sections, widgets, etc.

---

### **2. Service**

```
ng generate service <name>
ng g s <name>
```

**Purpose:**
Creates a service class for business logic, API calls, shared functions.

---

### **3. Interface**

```
ng generate interface <name>
ng g i <name>
```

**Purpose:**
Creates a TypeScript interface. Used for models, data shapes, type safety.

---

## 📦 **Other Very Useful Angular Generate Commands**

### **4. Module**

```
ng generate module <name>
ng g m <name>
```

**Purpose:**
Creates a module for grouping components, lazy loading, feature modules.

---

### **5. Class**

```
ng generate class <name>
ng g cl <name>
```

**Purpose:**
Creates a plain TypeScript class (utilities, models, helpers).

---

### **6. Pipe**

```
ng generate pipe <name>
ng g p <name>
```

**Purpose:**
Custom pipes to transform data in templates (e.g., format dates, currency, text).

---

### **7. Directive**

```
ng generate directive <name>
ng g d <name>
```

**Purpose:**
Custom behavior you attach to elements (e.g., hover highlight, auto-focus).

---

### **8. Enum**

```
ng generate enum <name>
ng g e <name>
```

**Purpose:**
Creates a TypeScript enum (status values, types categories, etc.).

---

### **9. Guard**

```
ng generate guard <name>
ng g g <name>
```

**Purpose:**
Creates route guard logic (AuthGuard, RoleGuard) to control access.

---

### **10. Resolver**

```
ng generate resolver <name>
ng g r <name>
```

**Purpose:**
Fetch data *before* a route loads—helps avoid blank screens.

---

### **11. Application**

```
ng generate application <name>
```

**Purpose:**
Creates an entirely new Angular app inside a workspace (monorepo style).

---

### **12. Library**

```
ng generate library <name>
```

**Purpose:**
Creates a reusable Angular library for components/services.

---

### **13. Web Worker**

```
ng generate web-worker <name>
```

**Purpose:**
Creates a worker thread for heavy tasks without blocking UI.

---

### **14. Service Worker**

```
ng add @angular/pwa
```

**Purpose:**
Adds PWA support → offline, caching, installable app.

---


