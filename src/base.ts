import EventEmitter from 'node:events';
import {escapeIdentifier, escapeLiteral} from 'npm:@mojojs/sql';
import {Statement} from 'npm:@mojojs/sql';

export class Base extends EventEmitter {
  /**
   * Escape PostgreSQL identifier.
   */
  escapeIdentifier(identifier: string): string {
    return escapeIdentifier(identifier);
  }

  /**
   * Escape PostgreSQL literal.
   */
  escapeLiteral(literal: string): string {
    return escapeLiteral(literal);
  }

  /**
   * Create new SQL query or partial query.
   */
  sql(parts: TemplateStringsArray, ...values: any[]): Statement {
    return Statement.sql(parts, ...values);
  }

  /**
   * Create new SQL query or partial query without safe placeholders.
   */
  sqlUnsafe(parts: TemplateStringsArray, ...values: any[]): Statement {
    return Statement.sqlUnsafe(parts, ...values);
  }
}
