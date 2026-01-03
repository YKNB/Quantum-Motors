# Quantum-Motors
Projet DevOps autour de l'application "Quantum Motors" (configurateur de
vehicules electriques) avec deux volets: mise en place d'une infrastructure
clusterisee et evolutions/monitoring.

## Contexte
Quantum Motors propose 5 modeles de vehicules (Electron, Volt, Spark, Pulse,
Zenith) avec differentes finitions. Le projet vise a reprendre l'application
front/API, la deployer en cluster et mettre en place une chaine CI/CD, puis
proposer une evolution microservices avec monitoring.

## partie_1 - Infra, provisioning, CI/CD
Objectif: automatiser le deploiement front/API/DB sur un cluster multi-tenant.
Elements principaux:
- Schema d'infrastructure et documentation projet.
- Provisioning via Ansible (playbooks, roles) pour preparer les VMs.
- CI/CD GitLab pour construire, tester et deployer.
- Code applicatif: API Node/Prisma et front Next.js.

Docs associees:
- `partie_1/documentation/Quantum Motors.pdf`
- `partie_1/CICD/Quantum_Motors.pdf`
- `partie_1/provisioning/Quantum_Motors.pdf`

## partie_2 - Monitoring et evolutions
Objectif: proposer une nouvelle architecture microservices et mettre en place
un monitoring des services et des logs.
Elements principaux:
- Microservices Docker (ex: model-service, color-service) et compose.
- Monitoring + dashboard d'etat des services (type status page).
- Playbooks Ansible d'installation/maintenance.

Docs associees:
- `partie_2/documentation/Quantum Motors.pdf`
- `partie_2/monitoring/README.md`
- `partie_2/docker/README.md`

## Contenu technique notable
- Backend API (Node.js/Prisma) avec tests et collection Postman.
- Frontend Next.js avec docker-compose et pipelines CI.
- Images de configuration et assets de modele dans les microservices Docker.

## Execution (exemples)

### API configurator (Node.js/Prisma)
```bash
cd partie_1/ansible/CICD/clo5-backend-master
yarn install
yarn dev
```

### Frontend (Next.js)
```bash
cd partie_1/CICD/Etape2-CICD/quantum_motors-front/clo5-front-main
yarn install
yarn dev
```

### Microservices Docker (partie_2)
```bash
cd partie_2/docker
docker-compose up -d --build
```
