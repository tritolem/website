---
title: Control plane
description: The central component that holds Tritolem's desired state and exposes its management interfaces.
---

:::note
Status: Design. Not yet implemented.
:::

The control plane is the central, highly available component of Tritolem. It
keeps the desired state for customers, projects, service offerings, and
service instances as Kubernetes custom resources.

The REST API and the CLI are both management interfaces on top of that same
desired state — neither is a separate source of truth. Direct access to
specific platform custom resources is a provisional path for selected
provider use cases, not a general customer-facing interface.

The control plane coordinates, across all connected clusters:

- **Policy** — which customers and projects may order which service
  offerings, and within which quotas.
- **Placement** — which workload cluster a given service instance runs on,
  based on resource availability, policy, and provider overrides.
- **Lifecycle** — provisioning, provider-approved updates, and full
  deprovisioning of service instances.

High availability is scoped to a single control-plane cluster. The exact
custom resource layout is not yet decided.
