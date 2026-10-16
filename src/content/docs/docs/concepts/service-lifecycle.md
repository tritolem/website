---
title: Service lifecycle
description: How a service goes from technical capability to a running, customer-owned instance in Tritolem.
---

:::note
Status: Design. Not yet implemented.
:::

Tritolem separates three concerns so that a customer-facing offering never
has to expose raw chart or implementation details:

| Layer | Responsibility |
| --- | --- |
| Service extension | The technical capability and operational integration of a service. |
| Provider offering | The releases, sizes, options, and policies a provider approves for customers to order. |
| Service instance | One customer's concrete, running copy: its configuration, placement, endpoint, and status. |

## Customers and projects

Providers manage customers and projects and control access: a customer may
only order and manage service instances inside projects it has been granted
access to. Self-service project creation by customers is not a goal.

## Ordering and running an instance

A customer orders a service in an approved size, with only the parameters
the provider's offering exposes — there is no free-form configuration of the
underlying chart. Each ordered instance is isolated in its own namespace on
its workload cluster, with its own endpoint, status, and lifecycle.

## Releases and updates

Providers approve which releases customers can use. Patch updates are then
rolled out automatically within a maintenance window the provider defines
and the customer selects. The product target is to support the last three
minor versions; an automatic rollback only happens when the service
extension explicitly confirms it is safe to roll back.

## Deletion

Deleting a service instance fully deprovisions it; there is no soft delete.
Tritolem does not provide backup or restore in its first functional scope,
so deleting — or losing — a persistent service's data is not automatically
recoverable.
